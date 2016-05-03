<template lang="jade">
.overview_box
  h3 What can we learn from the champion mastery data of over 700,000 summoners?
  h5 
  p 700,000+ summoners in dots
  h6 * Each dot represents 1,000 summoners
  #total_summoners_section
    .individual_summoner(v-for="n in total_summoners")
</template>

<script>
export default {
  data: function () {
    return {
      total_summoners: 700
    }
  }
}
</script>

<style lang="sass" scoped>
.overview_box
  h5
    padding-bottom: 1.272em
  h3, h6
    padding-bottom: 1em
  p
    font-weight: 600
</style>
