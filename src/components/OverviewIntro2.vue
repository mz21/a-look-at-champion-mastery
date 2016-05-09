<template lang="jade">
div
  h4.overview_question What can we learn from the champion mastery data of over 600,000 summoners?
  .overlay_section
    h5 THE SUMMONERS
    p 600,000 summoners in dots
    h6 * Each dot represents 1,000 summoners
    #total_summoners_box
      .individual_summoner(v-for="n in total_summoners")
</template>

<script>
export default {
  data: function () {
    return {
      total_summoners: 600
    }
  }
}
</script>

<style lang="sass" scoped>
#total_summoners_box
  display: flex
  flex-wrap: wrap
  width: 84%
  .individual_summoner
    width: 4px
    height: 4px
    border-radius: 2px
    background: #A9BD00
    margin: 3px 3px 0 0
</style>
