<template>
    <div class="PokemonDetail" :id="$store.state.selectedPokemon.types[0].type.name">
        <NuxtLink class="hidden-desktop" to="/" style="color:white;">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />&nbsp;Go Back
        </NuxtLink>
        <div id="favoriteButton" class="float-right">
            <font-awesome-icon v-if="!this.$store.state.inFavorite" v-on:click="addToFavorite" :icon="['far', 'fa-heart']" size="lg"/>
            <font-awesome-icon v-if="this.$store.state.inFavorite" v-on:click="removeFromFavorite" :icon="['fa', 'fa-heart']" size="lg"/>
        </div>
        <a v-on:click="shared" :action="'pokedex://details/' + $store.state.selectedPokemon.name" style="color:white; cursor:pointer;" id="shareButton" class="float-right mr-3">
            <font-awesome-icon icon="fa-solid fa-share" size="lg"/>
        </a>
        <h2>{{$store.state.selectedPokemon.name}}</h2>
        <div class="row mx-1">
            <div class="col-lg-5">
                <!--<img width="250px" :src="$store.state.selectedPokemon.sprites.other['official-artwork'].front_default" alt="">-->
                <ImageCarousel class="mb-3" :sprites="$store.state.selectedPokemon.sprites"></ImageCarousel>
                <PokemonInfo :pokemon="$store.state.selectedPokemon"></PokemonInfo>
            </div>
            <div class="col-lg-7">
                <PokemonStats :pokemon="$store.state.selectedPokemon"></PokemonStats>
                <PokemonMoves :pokemon="$store.state.selectedPokemon"></PokemonMoves>
                <div v-if="$store.state.selectedPokemon.evolutions.length > 1">
                    <PokemonEvolutions :pokemon="$store.state.selectedPokemon"></PokemonEvolutions>
                </div>
            </div>
        </div>
        <div id="teamButton">
            <div v-if="$store.state.team.filter(item => item.name === $store.state.selectedPokemon.name).length === 1">
                <a v-on:click="removeFromTeam" class="addTeam btn btn-dark">Remove from Team</a>
            </div>
            <div v-else>
                <div v-if="$store.state.team.length === 6">
                    <a class="addTeam btn btn-dark disabled">Team Full</a>
                </div>
                <div v-else>
                    <a v-on:click="addToTeam" class="addTeam btn btn-dark">Add to Team</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PokemonDetail',
    methods: {
        addToFavorite() {
            this.$store.dispatch('addPokemonToFavs', this.$store.state.selectedPokemon)
            this.$store.dispatch('inFavorite', true)
            this.$store.dispatch('favoriteCount',(Object.keys(this.$store.state.favoritePokemons).length))
        },
        removeFromFavorite() {
            this.$store.dispatch('removePokemonFromFavs', this.$store.state.selectedPokemon)
            this.$store.dispatch('inFavorite', false)
            this.$store.dispatch('favoriteCount',(Object.keys(this.$store.state.favoritePokemons).length))
        },
        addToTeam() {
            if(this.$store.state.team.length < 6) {
                this.$store.dispatch('addPokemonToTeam', this.$store.state.selectedPokemon)
            }
            else {
                alert("You can't have more than 6 pokemons in your team")
            }
            this.$store.dispatch('teamCount',(Object.keys(this.$store.state.team).length))
        },
        removeFromTeam() {
            this.$store.dispatch('removePokemonFromTeam', this.$store.state.selectedPokemon)
            this.$store.dispatch('teamCount',(Object.keys(this.$store.state.team).length))
        },
        shared() {
            navigator.clipboard.writeText('https://pokeapi.co/api/v2/pokemon/' + this.$store.state.selectedPokemon.id);
            this.$bvToast.toast(`Copied url to clipboard`, {
                toaster: 'b-toaster-bottom-right',
                autoHideDelay: 2000,
                noHoverPause: true,
                noCloseButton: true
            })
        }
    },
    created: function() {
        this.favorite = this.$store.state.favoritePokemons.includes(this.$store.state.selectedPokemon)
    },
}

</script>

<style>
.stats {
    position: relative;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-bottom: 20px;
    color: black;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43); 
    box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43);
}
.PokemonDetail {
    position: relative;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    color: white;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43); 
    box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43);
}
.addTeam {
    position: absolute;
    width: 250px;
    border-radius: 20px;
    left: 40%;
    bottom: 20px;
}
#favoriteButton{
    cursor: pointer;
}
</style>