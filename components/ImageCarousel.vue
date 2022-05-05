<template>
  <div>
    <b-carousel
      id="carousel-1"
      controls
      height="100vh"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide  :img-src="sprites.other['official-artwork'].front_default"
      ></b-carousel-slide>
      <b-carousel-slide  :img-src="sprites.other['home'].front_default">
      </b-carousel-slide>
      <b-carousel-slide style="height: 307px;" :img-src="sprites.other['dream_world'].front_default">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
      props: ['sprites'],
  }
</script>