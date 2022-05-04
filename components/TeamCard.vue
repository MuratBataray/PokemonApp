<template>
  <div class="Team">
      <NuxtLink class="hidden-desktop" to="/" style="color:white;">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />&nbsp;Go Back
      </NuxtLink>
      <h2 class="mb-5">My Team</h2>
      <div v-for="pokemon in $store.state.team" :key="pokemon.name">
        <NuxtLink to="/detail" class="m-0 p-0">
          <PokemonCard class="mx-1" :pokemon="pokemon"></PokemonCard>
        </NuxtLink>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TeamCard',
}
</script>

<style>
.Team {
    min-height: 95vh;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    color: white;
    transition: all 0.5s ease-in-out;
    background: rgb(70,70,156);
    background: linear-gradient(126deg, rgba(70,70,156,1) 0%, rgba(126,50,224,1) 100%);
    -webkit-box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43); 
    box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43);
}
</style>

<style>

</style>