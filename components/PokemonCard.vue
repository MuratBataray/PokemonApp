<template>
    <div class="pokemonCard row" v-on:click="selectedPokemon">
        <div class="col-2 p-0 float-right"><img :src="pokemon.sprites.front_default" :alt="pokemon.name"></div>
        <div class="col-4">
            <p style="font-weight: bold;" class="mb-0">{{pokemon.name}}</p>
            <p class="mb-0">Nr. {{pokemon.id}}</p>
        </div>
        <div class="col-5" style="display: inline-flex; justify-content: flex-end;">
            <div class="m-0 float-right" v-for="type in pokemon.types" :key="pokemon.name + type.type.name">
                <span class="type" :id="type.type.name">{{type.type.name}}</span>
            </div>
        </div>
        <div id="float-right">
            <font-awesome-icon class="m-0" icon="chevron-right" />
        </div>
    </div>
</template>

<script>
export default {
    name: "PokemonCard",
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
.pokemonCard {
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
.pokemonCard:hover {
    background-color: #ffffff;
    color: black;
    cursor: pointer;
}
.pokemonCard img {
    float: right;
    height: 50px;
    width: 50px;
}
.type {
    color: white;
    border-radius: 50px;
    margin: 0 0.2em;
    padding: 0.1em 0.7em;
    width: fit-content;
    text-align: center;
    font-size: 0.8em;
}
#chevron {
    position: absolute;
    top: 22%;
    right: 5%;
}
#grass {
    background-color: #95C24D;
}
#poison {
    background-color: #BA7EC8;
}
#fire {
    background-color: #FD7D25;
}
#water {
    background-color: #4592C3;
}
#electric {
    background-color: #FFCF00;
}
#ground {
    background-color: #D5B35B;
}
#fighting {
    background-color: #A23B6C;
}
#psychic {
    background-color: #F85888;
}
#rock {
    background-color: #B6A136;
}
#ice {
    background-color: #36e1ff;
}
#ghost {
    background-color: #7B62A3;
}
#normal {
    background-color: #A3ACAE;
}
#flying {
    background-color: #6ab2de;
}
#bug {
    background-color: #6d9036;
}
#fairy {
    background-color: #F8D4F3;
}
#dragon {
    background-color: #8B4513;
}
#steel {
    background-color: #303030;
}
</style>