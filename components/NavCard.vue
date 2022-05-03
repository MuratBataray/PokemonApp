<template>
    <NuxtLink :to="'/' + link">
    <div v-if="link === 'team'">
        <div class="navCard teamCard">
            <h3>{{title}}</h3>
            <p> {{$store.state.teamCount}} pokemons</p>
        </div>
    </div>
    <div v-else>
        <div class="navCard favCard">
            <h3>{{title}}</h3>
            <p> {{$store.state.favoriteCount}} pokemons</p>
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
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
    text-decoration: none;
    color: white;
    transition: all 0.5s ease-in-out;
}
.navCard:hover {
    color: grey;
}
.favCard {
    background: rgb(101,203,154);
    background: linear-gradient(90deg, rgba(101,203,154,1) 0%, rgba(21,208,220,1) 100%);
}
.teamCard {
    background: rgb(70,70,156);
    background: linear-gradient(126deg, rgba(70,70,156,1) 0%, rgba(126,50,224,1) 100%);
}
a:hover {
    text-decoration: none;
}
</style>