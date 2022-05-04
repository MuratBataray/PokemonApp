<template>
    <div class="disabledPokemonCard row" v-on:click="selectedPokemon">
        <div class="col-sm-2 p-0 float-right"><img :src="pokemon.sprites.front_default" :alt="pokemon.name"></div>
        <div class="col-sm-4">
            <p style="font-weight: bold;" class="mb-0">{{pokemon.name}}</p>
            <p class="mb-0">Nr. {{pokemon.id}}</p>
        </div>
        <div class="col-sm-5" style="display: inline-flex; justify-content: flex-end;">
            <div class="m-0 float-right" v-for="type in pokemon.types" :key="pokemon.name + type.type.name">
                <p class="type" :id="type.type.name">{{type.type.name}}</p>
            </div>
        </div>
        <div id="float-right">
            <font-awesome-icon class="m-0" icon="chevron-right" />
        </div>
    </div>
</template>

<script>
export default {
    name: "DisabledPokemonCard",
    props: ['pokemon'],
    data() {
        return {
            detailedPokemon: {}
        }
    },
    methods: {
        selectedPokemon() {
            this.$store.dispatch('selectPokemon', this.detailedPokemon)
            if (this.$store.state.favoritePokemons !== undefined) {
                if (this.$store.state.favoritePokemons.some(e => e.name === this.detailedPokemon.name)) {
                    this.$store.dispatch('inFavorite', true)
                } else {
                    this.$store.dispatch('inFavorite', false)
                }
            } else {
                this.$store.dispatch('inFavorite', false)
            }
        },
    },
    created: function() {
        this.$store.dispatch('getDetails', this.pokemon.id).then(() => {
            this.detailedPokemon = this.$store.state.pokemon
        })
    }
}
</script>

<style>
.disabledPokemonCard {
    position: relative;
    padding: 20px;
    background-color: rgba(245, 245, 245, 0.5);
    border-radius: 10px;
    margin-bottom: 20px;
    color: black;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43); 
    box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43);
}
.disabledPokemonCard:hover {
    background-color: rgba(245, 245, 245, 1);
    cursor: pointer;
}
.disabledPokemonCard img {
    float: right;
    height: 50px;
    width: 50px;
}
</style>