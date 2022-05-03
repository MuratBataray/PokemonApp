<template>
  <div class="m-auto" style="width: 50%;">
    <Navigation></Navigation>
    <div v-if="!loading">
      <div v-for="pokemon in $store.state.pokemons" :key="pokemon.name">
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