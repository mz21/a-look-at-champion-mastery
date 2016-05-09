<template lang="jade">
#table_of_contents_view
  #table_of_contents_box
    h3 A LOOK AT
    h1.two CHAMPION MASTERY
    h5 Dive into the data of over 100,000 matches and 600,000 summoners and take a look at some champion mastery trends.
    .table_of_contents_row(v-link="{name: 'overviewintro'}") 
      h4.title_num 01.
      h4.title_name AN OVERVIEW
    .table_of_contents_row(v-link="{name: 'summonersintro'}")
      h4.title_num 02.
      h4.title_name THE SUMMONERS
    .table_of_contents_row(v-link="{name: 'championsintro'}") 
      h4.title_num 03.
      h4.title_name THE CHAMPIONS
</template>

<script>
</script>

<style lang="sass">
#table_of_contents_view
  width: 100%
  height: 100%
  background: url("~assets/Tristana_4.jpg") no-repeat center top
  background-size: cover
  display: flex
  align-items: center
#table_of_contents_box
  background: rgba(242,242,242,0.22)
  padding: 2.6179em 1.618em
  margin-left: 7.5%
  max-width: 40%
  h1, h3, h4, h5, p
    color: rgb(240,240,240)
  h3 
    font-weight: 200
  h1
    font-weight: 200
    margin-bottom: -0.2em
  h1.two
    font-weight: 800
    //color: #d01fd0
  h5
    margin: 2.0581em 0
    font-weight: 200
    // font-family: "ff-meta-serif-web-pro"
    // font-size: 17px
.table_of_contents_row
  :hover
    cursor: pointer
  display: flex
  width: 50%
  h4.title_num, h4.title_name
    letter-spacing: 0.02em
  h4.title_num
    font-weight: 100
    width: 2.0581em
  h4.title_name
    font-weight: 600

</style>
