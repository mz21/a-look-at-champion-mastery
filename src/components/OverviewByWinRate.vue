<template lang="jade">
div
  h4.overview_question Does higher champion mastery even matter though? The answer is a resounding yes.
  .overlay_section
    h5 WIN RATE OVER MASTERY
    #win_rate_section
      .win_rate_box(v-for="win_rate in win_rates")
        .win_rate_bar(:style="{height: win_rate.win_rate*5 + 'px'}")
          .win_rate_tag
            h6 {{win_rate.win_rate}}%
        p Level {{win_rate.rank}}
</template>

<script>
export default {
  data: function () {
    return {
      win_rates: [{win_rate: 27.0, rank: 1},
                  {win_rate: 45.0, rank: 2},
                  {win_rate: 49.8, rank: 3},
                  {win_rate: 51.6, rank: 4},
                  {win_rate: 53.4, rank: 5}]
    }
  }
}
</script>

<style lang="sass" scoped>
#win_rate_section
  width: 90%
  margin: 0 auto
  display: flex
  align-items: flex-end
  justify-content: space-between
  .win_rate_box
    width: 15%
  .win_rate_bar
    background: #8B9A0C
</style>
