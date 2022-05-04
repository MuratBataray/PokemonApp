<template>
  <div class="app">
    <div v-if="$store.state.pokemons.length === 151" class="row m-0">
      <LeftPane class="col-sm-4"></LeftPane>
      <Nuxt class="my-4"/>
    </div>
    <div v-else>
        <div class="loading m-auto spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  },
  created() {
    this.$store.dispatch('getAllPokemon')
  },
}
</script>
<style>
.loading{
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
