<template>
    <div class="mx-1">
        <b-form-input v-model="text" v-on:input="search" placeholder="Pokemon zoeken"></b-form-input>
    </div>
</template>

<script>
export default {
    data() {
      return {
        text: ''
      }
    },
    methods: {
      search() {
        this.$store.dispatch('filterPokemon', this.text)
      }
    }
}
</script>

<style>

</style>