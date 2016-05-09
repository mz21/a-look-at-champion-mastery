<template lang="jade">
#summoners_view
  .intro_box
    h1 02. THE SUMMONERS
    h4.overview_question How do different groups of summoners approach champion mastery differently?
    h3.summoner_nav_tag(v-link="{name: 'summonersbyrole'}") a. By Role
    h3.summoner_nav_tag(v-link="{name: 'byregionmastery'}") b. By Region
</template>

<script>
</script>

<style lang="sass" scoped>
.summoner_nav_tag
  cursor: pointer
  color: #3FBAE2
</style>