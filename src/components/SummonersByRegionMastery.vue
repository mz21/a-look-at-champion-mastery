<template lang="jade">
#summoners_view
  .intro_box
    h2 02. THE SUMMONERS
    h4.overview_question Which regions have the most champion mastery? (Do Koreans really have more mastery? ...shockingly no.)
    .overlay_section
      h5 AVG TOTAL CHAMPION MASTERY
      #region_mastery_section
        .region_mastery_container(v-for="region_mastery in regions")
          .region_mastery_bar(:style="{height: region_mastery.score/5000 + 'px'}")
            h6 {{(region_mastery.score/1000).toFixed(0)}}k
          h6 {{region_mastery.region}}

</template>

<script>
export default {
  data: function () {
    return {
      regions: [
        {region: 'BR', score: 734303},
        {region: 'EUNE', score: 602030},
        {region: 'EUW', score: 614809},
        {region: 'KR', score: 566435},
        {region: 'LAN', score: 691370},
        {region: 'LAS', score: 665633},
        {region: 'NA', score: 585154},
        {region: 'OCE', score: 549514},
        {region: 'RU', score: 527149},
        {region: 'TR', score: 627165}
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
#region_mastery_section
  width: 90%
  margin: 0 auto
  display: flex
  align-items: flex-end
  justify-content: space-between
.region_mastery_container
  width: 9%
.region_mastery_bar
  width: 100%
  background: rgba(175, 29, 56, 0.85)
</style>
