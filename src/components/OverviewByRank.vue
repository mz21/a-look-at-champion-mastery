<template lang="jade">
div
  h4.overview_question To start, we can look at the champion mastery of every champion of all 600,000 summoners distributed by rank.
  .overlay_section
    h5 CHAMPION MASTERY LEVEL
    p 600,000 summoners have 41 million champions with mastery. Each dot represents 100,000 champions with mastery.
    #overview_rank_box
      .overview_rank_section
        p Level 1
        h6 (15,800,000)
        #total_summoners_box
          .individual_summoner(v-for="n in 158")
      .overview_rank_section
        p Level 2
        h6 (12,200,000)
        #total_summoners_box
          .individual_summoner(v-for="n in 122")
      .overview_rank_section
        p Level 3
        h6 (6,500,000)
        #total_summoners_box
          .individual_summoner(v-for="n in 65")
      .overview_rank_section
        p Level 4
        h6 (3,100,000)
        #total_summoners_box
          .individual_summoner(v-for="n in 31")  
      .overview_rank_section
        p Level 5
        h6 (3,800,000)
        #total_summoners_box
          .individual_summoner(v-for="n in 38")  

</template>

<script>
export default {
  data: function () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
#overview_rank_box
  height: 10em
  margin-top: 1em
  display: flex
.overview_rank_section
  height: 70%
  width: 20%
  p
    font-weight: 400
#total_summoners_box
  display: flex
  flex-wrap: wrap
  width: 84%
  margin: 0 auto
  .individual_summoner
    width: 4px
    height: 4px
    border-radius: 2px
    background: #A9BD00
    margin: 3px 3px 0 0
</style>
