<template>
<div>
    <h5>STATISTIEKEN</h5>
  <div class="stats">
    <div class="row">
        <div class="col-3" style="color: grey;">
            <p>HP</p>
            <p>Attack</p>
            <p>Defense</p>
            <p>Sp. Atk</p>
            <p>Sp. Def</p>
            <p>Speed</p>
            <p>Total</p>
        </div>
        <div class="col-1">
            <div v-for="stat in pokemon.stats" :key="pokemon.name + stat.stat.name">
                <p>{{stat.base_stat}}</p>
            </div>
            <p>{{getAvg}}</p>
        </div>
        <div class="col-8 mt-1">
            <!-- Didn't use v-for here to get cool animations on progress bar -->
            <b-progress :value="pokemon.stats[0].base_stat" :max="getMax" height="5px" style="margin-bottom: 35px;margin-top: 5px;" :variant="pokemon.stats[0].base_stat < getAvg ? 'danger' : 'success'"></b-progress>
            <b-progress :value="pokemon.stats[1].base_stat" :max="getMax" height="5px" style="margin-bottom: 35px;" :variant="pokemon.stats[1].base_stat < getAvg ? 'danger' : 'success'"></b-progress>
            <b-progress :value="pokemon.stats[2].base_stat" :max="getMax" height="5px" style="margin-bottom: 35px;" :variant="pokemon.stats[2].base_stat < getAvg ? 'danger' : 'success'"></b-progress>
            <b-progress :value="pokemon.stats[3].base_stat" :max="getMax" height="5px" style="margin-bottom: 35px;" :variant="pokemon.stats[3].base_stat < getAvg ? 'danger' : 'success'"></b-progress>
            <b-progress :value="pokemon.stats[4].base_stat" :max="getMax" height="5px" style="margin-bottom: 35px;" :variant="pokemon.stats[4].base_stat < getAvg ? 'danger' : 'success'"></b-progress>
            <b-progress :value="pokemon.stats[5].base_stat" :max="getMax" height="5px" style="margin-bottom: 35px;" :variant="pokemon.stats[5].base_stat < getAvg ? 'danger' : 'success'"></b-progress>
            <b-progress :value="getAvg" :max="getMax" height="5px" style="margin-bottom: 35px;" :variant="getAvg <= 50 ? 'danger' : 'success'"></b-progress>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    props: ['pokemon'],
    computed: {
        getAvg() {
            return Math.round(this.pokemon.stats.reduce((total, next) => total + next.base_stat, 0) / this.pokemon.stats.length);
        },
        getMax() {
            return Math.max.apply(Math, Object.values(this.pokemon.stats).map(function(o) { return o.base_stat; }))
        }
    }

}
</script>

<style>
.stats {
    position: relative;
    padding: 20px;
    padding-bottom: 0px;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-bottom: 20px;
    color: black;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43); 
    box-shadow: 5px 5px 50px -3px rgba(0,0,0,0.43);
}
</style>