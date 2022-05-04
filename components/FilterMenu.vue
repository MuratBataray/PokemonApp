<template>
<div>
    <b-modal
      id="filter-modal"
      ref="modal"
      title="Filteren op"
      hide-footer
    >
    <b-list-group>
        <p>TODO</p>
    </b-list-group>
    </b-modal>
</div>
</template>

<script>
export default {
    methods: {
      submitSort() {
        this.$nextTick(() => {
          this.$bvModal.hide('filter-modal')
        })
      }
    }
  }
</script>

<style>

</style>