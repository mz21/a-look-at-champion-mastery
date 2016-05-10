<template lang="jade">
#overview_view
  .intro_box
    h2 01. AN OVERVIEW
    router-view(transition="fade", transition-mode="out-in")
</template>

<script>
</script>

<style lang="sass">
#overview_view
  width: 100%
  height: 100%
  background: url("~assets/Jax_4.jpg") no-repeat center top
  background-size: cover
  display: flex
  align-items: center
</style>
