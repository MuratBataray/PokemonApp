<template>
  <div class="col-8">
    <PokemonDetail class="pokemonDetail"></PokemonDetail>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
@media (max-width: 1300px) {
  .pokemonDetail, .Team, .Favorites{
    min-width: 95vw;
    display: block;
    margin: 0 !important;
    flex: 0;
  }
  .addTeam {
    position: fixed;
    bottom: 5vh;
    transform: translateX(-5%);
  }
  #teamButton {
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 1301px) {
  .hidden-desktop {
    display: none;
  }
}
</style>