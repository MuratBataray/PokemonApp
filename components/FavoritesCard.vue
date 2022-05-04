<template>
  <div class="Favorites">
    <NuxtLink class="hidden-desktop" to="/" style="color:white;">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />&nbsp;Go Back
        </NuxtLink>
      <h2 class="mb-5">Favorites</h2>
      <div v-for="pokemon in $store.state.favoritePokemons" :key="pokemon.name">
        <NuxtLink to="/detail" class="m-0 p-0">
          <PokemonCard class="mx-1" :pokemon="pokemon"></PokemonCard>
        </NuxtLink>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FavoritesCard'
}
</script>

<style>
.Favorites {
    min-height: 95vh;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    color: white;
    transition: all 0.5s ease-in-out;
    background: rgb(101,203,154);
    background: linear-gradient(90deg, rgba(101,203,154,1) 0%, rgba(21,208,220,1) 100%);
    -webkit-box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43); 
    box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43);
}
</style>