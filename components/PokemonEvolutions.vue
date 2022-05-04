<template>
<div>
    <h5>EVOLUTIES</h5>
    <div v-for="(evo, index) in $store.state.selectedPokemon.evolutions" :key="evo.name + index">
        <PokemonCard class="mx-1" :pokemon="evo"></PokemonCard>
    </div>
  </div>
</template>

<script>
export default {
    props: ['pokemon'],
}
</script>

<style>
</style>