<template lang="jade">
.nav
  p(v-link="{name: 'root'}") HOME
  p(v-link="{name: 'overviewintro'}") AN OVERVIEW
  p(v-link="{name: 'summonersintro'}") THE SUMMONERS
  p(v-link="{name: 'championsintro'}") THE CHAMPIONS
  p(v-link="{name: 'addendum'}") ADDENDUM
.scroll_section(@click="changePage({type: 'keydown', keyCode: 40})")
  svg.scroll_icon(width="1.25em", height="0.9375em", viewBox="6 8 12 9")
    polygon(id="Shape", stroke="none", fill-opacity="0.7", fill="rgb(245,245,245)", fill-rule="evenodd", points="16.59 8.59 12 13.17 7.41 8.59 6 10 12 16 18 10")
  h6 Scroll for More
#container
  router-view(transition="fade", transition-mode="out-in")
</template>

<script>
import Store from './store'
export default {
  data: function () {
    return {
      pagechange_lock: false,
      last_scroll_time: 0
    }
  },
  methods: {
    changePage: function (e) {
      let keyCode = e.keyCode
      let delta = e.deltaY
      const DOWNKEY = 40
      const UPKEY = 38
      const LEFTKEY = 37
      const RIGHTKEY = 39
      const LOW_SCROLL_SENSITIVITY = 5
      let router = this.$route.router

      if (this.pagechange_lock === false || e.type === 'keydown') {
        if (keyCode === DOWNKEY || keyCode === RIGHTKEY || delta > LOW_SCROLL_SENSITIVITY) {
          this.pagechange_lock = true
          this.last_scroll_time = Date.now()
          router.go({name: Store.state[this.$route.name].afterPage})
        } else if (keyCode === UPKEY || keyCode === LEFTKEY || delta < -1 * LOW_SCROLL_SENSITIVITY) {
          this.pagechange_lock = true
          this.last_scroll_time = Date.now()
          router.go({name: Store.state[this.$route.name].beforePage})
        }
      }
      if (Date.now() - this.last_scroll_time > 850) {
        this.pagechange_lock = false
      }
    }
  },
  ready: function () {
    // document.addEventListener('keydown', function (e) {
    //   e.preventDefault()
    //   return false
    // }, false)
    // disables scrolling
    // document.addEventListener('wheel', function (e) {
    //   e.preventDefault()
    //   return false
    // }, false)
    document.addEventListener('keydown', this.changePage, false)
    document.addEventListener('wheel', this.changePage, false)
  }
}
</script>

<style lang="sass">
@import './assets/normalize.css'

html
  background: rgb(20,20,20)
  font-size: 16px
  font-family: "proxima-nova", "brandon-grotesque"
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased !important
  height: 100%
  line-height: 1.45
  div
    box-sizing: border-box
  a
    text-decoration: none
  h1,h2,h3,h4,h5,h6,p
    font-weight: 400
    margin: 0
  h1
    font-size: 2.6179em
  h2
    font-size: 2.0581em
  h3
    font-size: 1.618em
  h4
    font-size: 1.272em
  h5
    font-size: 1em
  h6
    font-size: 0.7862em
  p
    font-size: 1em

.fade-transition
  transition: opacity .6s linear

.fade-leave
  opacity: 0
body
  height: 100%
  min-height: 100%
  width: 100%
#container
  height: 100%
  width: 100%
#app
  width: 100%
  height: 100%
  min-height: 100%
.nav
  position: fixed
  width: 50%
  left: 0
  right: 0
  margin: 0 auto
  padding-top: 1.5%
  display: flex
  justify-content: space-between
  color: rgb(245,245,245)
  p
    cursor: pointer
    font-weight: 600
    letter-spacing: 0.1em
.scroll_section
  cursor: pointer
  position: fixed
  width: 12%
  top: 92%
  display: flex
  flex-wrap: wrap
  justify-content: center
  left: 0
  right: 0
  margin: 0 auto
  color: rgb(230,230,230)
  h6
    width: 100%
    text-align: center
.intro_box
  margin-left: 7.5%
  padding: 2.6179em 1.618em
  width: 40%
  height: 85%
  p, h1, h2, h4, h5, h6
    color: rgb(250,250,250)
    width: 100%
  h1, h2, h4, h5, h6
    font-weight: 300
    margin-bottom: 1em
    text-align: center
  h1, h2
    letter-spacing: 0.1em
    margin-bottom: 0.7862em
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
.overlay_section
  background: rgba(242,242,242,0.22)
  padding: 2.6179em 1.618em
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
.implementation_tag
  cursor: pointer
  margin-bottom: 0.5em
  display: flex
  p.methods_tag
    text-align: left
    padding-left: 1em
    color: #2DAAB7
.implementation_box
  position: absolute
  width: 50%
  left: 0
  right: 0
  top: 20%
  height: 60%
  margin: 0 auto
  background: rgba(120,120,120, 0.85)
  color: white
  z-index: 1000
  h4
    text-align: center
    font-weight: 600
    margin: 1em 0
  p
    text-align: left
    font-weight: 400
    margin: 1em 2em
    width: 90%
.exit_icon
  cursor: pointer
  position: absolute
  right: 2%
  top: 2%
</style>
