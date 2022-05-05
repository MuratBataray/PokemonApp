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
    position:fixed !important;
    bottom:5vw;
    right:25%;
    left:50%;
    margin-left:-125px;
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