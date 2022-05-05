<template>
<div>
    <b-modal
      id="filter-modal"
      ref="modal"
      title="Filteren op"
      hide-footer
    >
    <b-list-group class="d-inline">
        <div class="m-1 float-left" v-for="type in types" :key="type">
          <b-list-group-item style="max-width: fit-content;" button v-on:click="filter(type)" :active="$store.state.filter === type">
            <span class="type" :id="type">{{type}}</span>
          </b-list-group-item>
        </div>
    </b-list-group>
    <b-button class="mt-3" variant="dark" block @click="submitSort">Toepassen</b-button>
        <b-button class="mt-1" variant="danger" block @click="removeSort">Verwijder filter</b-button>
    </b-modal>
</div>
</template>

<script>
export default {
    name: 'FilterMenu',
    data() {
      return {
        text: '',
        types: ['fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'steel', 'fairy']
      }
    },
    methods: {
      submitSort() {
        this.$nextTick(() => {
          this.$store.dispatch('filterPokemon', this.text)
          this.$bvModal.hide('filter-modal')
        })
      },
      removeSort() {
        this.$nextTick(() => {
          this.$store.dispatch('filterPokemon', '')
          this.$bvModal.hide('filter-modal')
        })
      },
      filter(type) {
        this.text = type
      }
    }
  }
</script>

<style>

</style>