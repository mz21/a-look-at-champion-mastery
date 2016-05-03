<template lang="jade">
#overview_view
  #overview_container
    #nav_section
      h4.app_nav_main A Look at Champion Mastery
      h2.chapter_title 01. AN OVERVIEW
    #overview_section
      component(:is="current_slide.name")
      img#scenery_image(:src="scenery_image")

</template>

<script>
// import d3 from 'd3'
import OverviewIntro from './OverviewIntro'
import OverviewByRank from './OverviewByRank'
export default {
  components: {
    OverviewIntro, OverviewByRank
  },
  data: function () {
    return {
      scenery_image: require('assets/Jax_4.jpg'),
      slides: [
        {name: 'OverviewIntro'},
        {name: 'OverviewByRank'}
      ],
      current_slide_position: 0,
      last_scroll_time: 0,
      pagechange_lock: false
    }
  },
  computed: {
    current_slide: function () {
      return this.slides[this.current_slide_position]
    }
  },
  methods: {
    changeSlideIndex: function (e) {
      // this.$route.router.go('/')
      console.log(this.$route)

      let keyCode = e.keyCode
      let delta = e.deltaY
      const DOWNKEY = 40
      const UPKEY = 38
      const LOW_SCROLL_SENSITIVITY = 4
      let slidesCount = this.slides.length
      console.log(delta)
      let oldSlideIndex = this.current_slide_position
      if (this.pagechange_lock === false) {
        if (keyCode === DOWNKEY || delta > LOW_SCROLL_SENSITIVITY) {
          if (this.current_slide_position !== slidesCount - 1) {
            this.current_slide_position++
          }
        } else if (keyCode === UPKEY || delta < -1 * LOW_SCROLL_SENSITIVITY) {
          if (this.current_slide_position !== 0) {
            this.current_slide_position--
          }
        }
      }
      if (oldSlideIndex !== this.current_slide_position) {
        this.pagechange_lock = true
      }
      if (Date.now() - this.last_scroll_time > 40) {
        console.log(Date.now())
        this.pagechange_lock = false
      }
      this.last_scroll_time = Date.now()
      return false
    }
  },
  ready: function () {
    // adds page navs
    document.addEventListener('keydown', this.changeSlideIndex, false)
    document.addEventListener('wheel', this.changeSlideIndex, false)
  },
  route: {
    activate: function (transition) {
      console.log('activation happened')
      transition.next()
    }
  }
  /*
  1) What can we learn from the champion mastery data of over 700,000 summoners?
  2)
  */
}
</script>

<style lang="sass">
#overview_view
  width: 100%
  height: 100%
  background: rgb(235,235,235)
.chapter_title
  font-weight: 700
  margin-bottom: 1.618em
  text-align: center
.app_nav_main
  padding: 2%
  color: rgba(220,41,30, 0.7)
#nav_section
  height: 15%
  display: flex
  align-items: space-between
  flex-wrap: wrap
  h4, h2
    width: 100%
#overview_section
  height: 75%
  display: flex
  // flex-direction: column
  flex-wrap: wrap
  align-items: center
  justify-content: center
#overview_container
  width: 80%
  height: 100%
  margin: 0 auto
.overview_box
  width: 50%
  padding: 2%
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: left
#total_summoners_section
  width: 80%
  display: flex
  flex-wrap: wrap
.individual_summoner
  width: 4px
  height: 4px
  border-radius: 2px
  background: rgba(220,41,30, 0.7)
  margin: 2px 2px 0 0
#scenery_image
  width: 40%
  height: auto !important
  opacity: 0.7
</style>
