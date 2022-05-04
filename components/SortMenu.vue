<template>
<div>
    <b-modal
      id="sort-modal"
      ref="modal"
      title="Sorteren op"
      hide-footer
    >
    <b-list-group>
        <b-list-group-item button v-on:click="sort('alf_asc')" :active="$store.state.sort === 'alf_asc'">
            <font-awesome-icon icon="fa-solid fa-arrow-up-a-z"/>&nbsp;Alfabetisch oplopend
        </b-list-group-item>
        <b-list-group-item button v-on:click="sort('alf_desc')" :active="$store.state.sort === 'alf_desc'">
            <font-awesome-icon icon="fa-solid fa-arrow-down-a-z"/>&nbsp;Alfabetisch aflopend
        </b-list-group-item>
        <b-list-group-item button v-on:click="sort('num_asc')" :active="$store.state.sort === 'num_asc'">
            <font-awesome-icon icon="fa-solid fa-arrow-down-1-9" />&nbsp;Numeriek oplopend
            </b-list-group-item>
        <b-list-group-item button v-on:click="sort('num_desc')" :active="$store.state.sort === 'num_desc'">
            <font-awesome-icon icon="fa-solid fa-arrow-up-1-9" />&nbsp;Numeriek aflopend
        </b-list-group-item>
        <b-button class="mt-3" variant="dark" block @click="submitSort">Toepassen</b-button>
    </b-list-group>
    </b-modal>
</div>
</template>

<script>
export default {
    methods: {
        sort(value) {
            this.$store.dispatch('sort', value)
        },
      submitSort() {
        this.$store.dispatch('submitSort')
        this.$nextTick(() => {
          this.$bvModal.hide('sort-modal')
        })
      }
    }
  }
</script>

<style>

</style>