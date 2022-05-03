<template>
    <div class="navCard">
        <h3>{{title}}</h3>
        <p> {{count}} pokemon</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'link'],
    data() {
        return {
            count: 0
        }
    },

}
</script>

<style>
.navCard {
    padding: 20px;
    background: rgb(70,70,156);
    background: linear-gradient(126deg, rgba(70,70,156,1) 0%, rgba(126,50,224,1) 100%);
    border-radius: 4px;
    margin-bottom: 20px;
    text-decoration: none;
    color: white;
    transition: all 0.5s ease-in-out;
}
.navCard:hover {
    color: grey;
}
a:hover {
    text-decoration: none;
}
</style>