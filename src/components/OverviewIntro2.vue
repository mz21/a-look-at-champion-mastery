<template lang="jade">
.overview_intro_box
  h1 01. AN OVERVIEW
  h4.overview_question What can we learn from the champion mastery data of over 700,000 summoners?
  #total_summoners_section
    h5 THE SUMMONERS
    p 700,000+ summoners in dots
    h6 * Each dot represents 1,000 summoners
    #total_summoners_box
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
.overview_intro_box
  margin-left: 7.5%
  padding: 2.6179em 1.618em
  width: 40%
  p, h1, h4, h5, h6
    color: rgb(250,250,250)
    width: 100%
  h1, h4, h5, h6
    font-weight: 300
    margin-bottom: 1em
    text-align: center
  h5
    text-align: center
    letter-spacing: 0.25em
    font-weight: 200
  p
    font-weight: 600
    text-align: center
  h4.overview_question
    color: rgb(200,200,200)
    margin-bottom: 1.272em
    text-align: left
#total_summoners_section
  background: rgba(242,242,242,0.22)
  padding: 2.6179em 1.618em
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
#total_summoners_box
  display: flex
  flex-wrap: wrap
  width: 80%
  .individual_summoner
    width: 4px
    height: 4px
    border-radius: 2px
    background: #A9BD00
    margin: 3px 3px 0 0
</style>
