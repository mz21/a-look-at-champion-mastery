<template lang="jade">
#champions_view
  router-view(transition="fade", transition-mode="out-in")
</template>

<script>
</script>

<style lang="sass">
#champions_view
  width: 100%
  height: 100%
  background: #464646
.overlay_section
  background: rgba(242,242,242,0.22)
  padding: 2.6179em 1.618em
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
</style>
