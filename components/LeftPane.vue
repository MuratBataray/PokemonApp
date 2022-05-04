<template>
  <div class="mx-auto">
    <SortMenu></SortMenu>
    <FilterMenu></FilterMenu>
    <div class="mx-2 my-4 d-flex justify-content-end">
            <div class="filter mr-3">
              <font-awesome-icon v-b-modal.filter-modal icon="fa-filter" size="lg"/>
            </div>
            <div class="sort">
            <font-awesome-icon v-b-modal.sort-modal icon="fa-sort" size="lg"/>
            </div>
    </div>
    <h2 class="mx-2">Pokedex</h2>
    <SearchBar></SearchBar>
    <Navigation></Navigation>
    <div v-for="pokemon in Object.values(this.$store.state.pokemons).filter(e => e.name.startsWith($store.state.filter))" :key="pokemon.name">
      <NuxtLink to="/" class="m-0 p-0">
        <PokemonCard class="mx-2" :pokemon="pokemon"></PokemonCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftPane",
  methods: {
    filter() {
      alert('filter')
    },
    sort() {
      alert('sort')
    }
  }
}
</script>

<style>
.filter{
  cursor: pointer;
}
.sort{
  cursor: pointer;
}
</style>