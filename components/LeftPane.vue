<template>
  <div class="mx-auto">
    <h2 class="mx-2">Pokedex</h2>
    <SearchBar></SearchBar>
    <Navigation></Navigation>
    <div v-if="!loading">
      <div v-for="pokemon in Object.values(this.$store.state.pokemons).filter(e => e.name.startsWith($store.state.filter))" :key="pokemon.name">
        <NuxtLink to="/" class="m-0 p-0">
          <PokemonCard class="mx-2" :pokemon="pokemon"></PokemonCard>
        </NuxtLink>
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
    })
  },

}
</script>

<style>

</style>