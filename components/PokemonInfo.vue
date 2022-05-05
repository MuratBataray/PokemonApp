<template>
<div>
    <h5>INFO</h5>
  <div class="info">
    <div class="row">
        <p class="mx-3">{{pokemon.species.flavor_text_entries[0].flavor_text}}</p>
        <div class="col-4" style="color: grey;">
            <p>Type</p>
            <p>Number</p>
            <p>Weight</p>
            <p>Height</p>
            <p>Abilities</p>
        </div>
        <div class="col-7">
            <div class="mb-3" style="display: inline-flex; justify-content: flex-end;">
                <div class="float-right" v-for="type in pokemon.types" :key="pokemon.name + type.type.name">
                    <p class="type ml-0 mr-2" :id="type.type.name">{{type.type.name}}</p>
                </div>
            </div>
            <p>{{pokemon.id}}</p>
            <p>{{pokemon.weight / 10}}kg</p>
            <p>{{pokemon.height / 10}}m</p>
            <div v-for="ability in pokemon.abilities" :key="pokemon.name + ability.ability.name">
                    <p class="mb-1" :id="ability.ability.name">{{ability.ability.name}}</p>
            </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    props: ['pokemon']

}
</script>

<style>
.info {
    position: relative;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-bottom: 20px;
    color: black;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43); 
    box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43);
}
</style>