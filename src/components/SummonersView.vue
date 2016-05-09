<template lang="jade">
div
  router-view(transition="fade", transition-mode="out-in")
</template>

<script>
</script>

<style lang="sass" scoped>
#summoners_view
  width: 100%
  height: 100%
  background: url("~assets/Xerath_2.jpg") no-repeat center top
  background-size: cover
  display: flex
  align-items: center
.overlay_section
  background: rgba(242,242,242,0.22)
  padding: 2.6179em 1.618em
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
div
  height: 100%
</style>

