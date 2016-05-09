<template lang="jade">
div
 h4.overview_question We can also see the average summoner's champion mastery points. This chart looks at the mastery distributions for the summoner's 15 most played champs.
 .overlay_section
    h5 MASTERY DISTRIBUTION BY %
    .overviewbytime_axis
      h6.left % of points of most played
      h6.right % of 15th most played
    #mastery_distribution_section
      .individual_champ_mastery(v-for="mastery in mastery_distribution", :style="{height: mastery*1000 + 'px'}")
        h6 {{(mastery*100).toFixed(1)}}
</template>

<script>
export default {
  data: function () {
    return {
      mastery_distribution: [ 0.221,
      0.133,
      0.100,
      0.081,
      0.069,
      0.060,
      0.053,
      0.047,
      0.043,
      0.039,
      0.036,
      0.033,
      0.031,
      0.029,
      0.027 ]
    }
  }
}
</script>

<style lang="sass" scoped>
#mastery_distribution_section
  width: 90%
  display: flex
  align-items: flex-end
  justify-content: space-between
  .individual_champ_mastery
    width: 6.1%
    // height: 200px
    background: rgb(50,50,60)
.overviewbytime_axis
  .left
    float: left
    width: 50%
    text-align: left
  .right
    float: right
    width: 50%
    text-align: right
  width: 100%
</style>
