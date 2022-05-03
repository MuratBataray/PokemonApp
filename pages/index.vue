<template>
  <div class="app">
    <div class="row">
      <LeftPane class="col-sm-4"></LeftPane>
      <PokemonDetail class="col-sm-8"></PokemonDetail>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
