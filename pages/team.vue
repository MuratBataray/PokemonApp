<template>
    <div class="col-lg-8">
      <TeamCard></TeamCard>
    </div>
</template>

<script>
export default {
    name: "Team"

}
</script>

<style scoped>
@media (max-width: 1300px) {
  .left-pane {
    display: none;
  }
  .Team{
    max-width: 100%;
    display: block;
    margin: 0 !important;
    flex: 0;
  }
}
</style>