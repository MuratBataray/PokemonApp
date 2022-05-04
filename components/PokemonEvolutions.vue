<template>
<div>
    <h5>EVOLUTIES</h5>
    <div v-for="(evo, index) in $store.state.selectedPokemon.evolutions" :key="evo.name + index">
        <div v-if="$store.state.selectedPokemon.name === evo.name">
            <PokemonCard class="mx-1" :pokemon="evo"></PokemonCard>
        </div>
        <div v-else>
            <DisabledPokemonCard class="mx-1" :pokemon="evo"></DisabledPokemonCard>
        </div>
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