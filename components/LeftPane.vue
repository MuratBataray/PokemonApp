<template>
  <div class="m-auto" style="width: 50%;">
    <Navigation></Navigation>
    <div v-if="!loading">
      <div v-for="pokemon in $store.state.pokemons" :key="pokemon.name">
        <PokemonCard class="mx-2" :pokemon="pokemon"></PokemonCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftPane",
  data() {
    return {
      loading: true
    }
  },
  created() {
    this.$store.dispatch('getAllPokemon').then(() => {
      this.loading = false
      console.log(this.$store.state.pokemons)
    })
  },

}
</script>

<style>

</style>