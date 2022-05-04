<template>
    <NuxtLink :to="'/' + link">
    <div v-if="link === 'team'">
        <div class="navCard teamCard">
            <h5>{{title}}</h5>
            <span> {{$store.state.teamCount}} pokemons</span>
        </div>
    </div>
    <div v-else>
        <div class="navCard favCard">
            <h5>{{title}}</h5>
            <span> {{$store.state.favoriteCount}} pokemons</span>
        </div>
    </div>
    </NuxtLink>
</template>

<script>
export default {
    props: ['title', 'link'],
}
</script>

<style>
.navCard{
    padding: 6em 0 1em 2em;
    border-radius: 4px;
    margin-bottom: 0.5em;
    text-decoration: none;
    color: white;
    transition: all 0.5s ease-in-out;
}
.favCard:hover {
    background: linear-gradient(90deg, rgba(101,203,154,0.8) 0%, rgba(21,208,220,0.8) 100%);
    cursor: pointer;
}
.favCard {
    background: rgb(101,203,154);
    background: linear-gradient(90deg, rgba(101,203,154,1) 0%, rgba(21,208,220,1) 100%);
}
.teamCard:hover {
    background:linear-gradient(126deg, rgba(70,70,156,0.8) 0%, rgba(126,50,224,0.8) 100%);
    cursor: pointer;
}
.teamCard {
  background: rgb(70,70,156);
  background:linear-gradient(126deg, rgba(70,70,156,1) 0%, rgba(126,50,224,1) 100%);
}
a:hover {
    text-decoration: none;
}
</style>