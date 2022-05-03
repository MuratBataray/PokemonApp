<template>
<div>
    <h5>INFO</h5>
  <div class="info">
    <div class="row">
        <div class="col-lg-5" style="color: grey;">
            <p>Type</p>
            <p>Number</p>
            <p>Weight</p>
            <p>Height</p>
            <p>Abilities</p>
        </div>
        <div class="col-lg-7">
            <div class="mb-3" style="display: inline-flex; justify-content: flex-end;">
                <div class="float-right" v-for="type in pokemon.types" :key="pokemon.name + type.type.name">
                    <p class="type ml-0 mr-2" :id="type.type.name">{{type.type.name}}</p>
                </div>
            </div>
            <p>{{pokemon.id}}</p>
            <p>{{pokemon.weight / 10}}kg</p>
            <p>{{pokemon.height / 10}}m</p>
            <div style="display: inline-flex;">
                <div v-for="(ability, index) in pokemon.abilities" :key="pokemon.name + ability.ability.name">
                    <div v-if="index === 0">
                        <p :id="ability.ability.name">{{ability.ability.name}}&nbsp;</p>
                    </div>
                    <div v-else>
                        <p :id="ability.ability.name">/ {{ability.ability.name}}</p>
                    </div>
                </div>
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
#grass {
    background-color: #95C24D;
}
#poison {
    background-color: #BA7EC8;
}
#fire {
    background-color: #FD7D25;
}
#water {
    background-color: #4592C3;
}
#electric {
    background-color: #FFCF00;
}
#ground {
    background-color: #D5B35B;
}
#fighting {
    background-color: #A23B6C;
}
#psychic {
    background-color: #F85888;
}
#rock {
    background-color: #B6A136;
}
#ice {
    background-color: #95C24D;
}
#ghost {
    background-color: #7B62A3;
}
#normal {
    background-color: #A3ACAE;
}
#flying {
    background-color: #6ab2de;
}
#bug {
    background-color: #6d9036;
}
#fairy {
    background-color: #F8D4F3;
}
#dragon {
    background-color: #8B4513;
}
#steel {
    background-color: #303030;
}
</style>