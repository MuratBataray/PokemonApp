<template>
  <div class="app">
    <div v-if="$store.state.pokemons.length === 151" class="view row m-0">
      <LeftPane id="left-pane" class="left-pane col-4"></LeftPane>
      <Nuxt class="my-4"/>
    </div>
    <div v-else>
        <div class="loading">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs" style="width:100px;">
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
  watch: {
    $route() {
      if (window.location.href.indexOf('detail') > -1 || window.location.href.indexOf('team') > -1 || window.location.href.indexOf('favorites') > -1) {
          if (window.innerWidth < 1300) {
            document.getElementById('left-pane').style.display = 'none';
          } else {
            document.getElementById('left-pane').style.display = 'block';
          }
      } else {
        document.getElementById('left-pane').style.display = 'block';
      }
    }
  },
  created() {
    this.$store.dispatch('getAllPokemon')
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.location.href.indexOf('detail') > -1 || window.location.href.indexOf('team') > -1 || window.location.href.indexOf('favorites') > -1) {
          if (window.innerWidth < 1300) {
            document.getElementById('left-pane').style.display = 'none';
          } else {
            document.getElementById('left-pane').style.display = 'block';
          }
      } else {
        document.getElementById('left-pane').style.display = 'block';
      }
    })
  }
}
</script>
<style>
.loading{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 1300px) {
  .hidden-mobile {
    display: none;
  }
  .left-pane, .view {
    max-width: 100%;
    display: block;
    margin: 0 !important;
    flex: 0;

  }
}
</style>
