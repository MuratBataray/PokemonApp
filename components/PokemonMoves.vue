<template>
<div>
    <h5>MOVESET</h5>
  <div class="moves">
        <div class="row mx-3" style="color: grey;">
            <div class="col-sm-6" v-for="move in pokemonMoves" :key="pokemon.name + move.move.name">
                <div class="row">
                    <div class="level" style="height: fit-content;" :id="move.version_group_details[0].level_learned_at">
                        <p class="m-0 p-0">Level {{move.version_group_details[0].level_learned_at}}</p>
                    </div>
                    <p>{{move.move.name}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['pokemon'],
    computed: {
        pokemonMoves() {
            // Filter out all moves from later games and only allow moves that can be learned by leveling up
            // Also sort by level learned at (lowest first)
            // Only select first 4 moves to not clutter the component
            return this.pokemon.moves.filter(move => {
                return move.version_group_details[0].version_group.name === 'red-blue' && 
                move.version_group_details[0].move_learn_method.name === 'level-up'
            }).sort((a, b) => {
                return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at
            }).splice(0, 4)
        }
    }
}
</script>

<style>
.moves {
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
.level{
    border-radius: 50px;
    margin: 0 5px;
    padding: 0px 15px;
    width: fit-content;
    text-align: center;
}
[id="1"], [id="2"], [id="3"] {
    color: rgba(143, 46, 254, 1);
    border: 1px solid rgba(143, 46, 254, 1);
    background: rgba(143, 46, 254, 0.43);
}
[id="4"], [id="5"], [id="6"] {
    color: rgba(46, 230, 254, 1);
    border: 1px solid rgba(46, 230, 254, 1);
    background: rgba(46, 230, 254, 0.43);
}
[id="7"], [id="8"], [id="9"] {
    color: rgb(254, 136, 46);
    border: 1px solid rgb(254, 136, 46);
    background: rgba(254, 136, 46, 0.43);
}
[id="10"], [id="11"], [id="12"] {
    color: rgb(46, 254, 122);
    border: 1px solid rgb(46, 254, 122);
    background: rgba(46, 254, 122, 0.43);
}
[id="13"], [id="14"], [id="15"] {
    color: rgb(254, 46, 46);
    border: 1px solid rgb(254, 46, 46);
    background: rgba(254, 46, 46, 0.43);
}
</style>