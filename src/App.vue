<template lang="jade">
  div
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
      console.log(e)
      let keyCode = e.keyCode
      let delta = e.deltaY
      const DOWNKEY = 40
      const UPKEY = 38
      const LOW_SCROLL_SENSITIVITY = 4
      let router = this.$route.router

      if (this.pagechange_lock === false || e.type === 'keydown') {
        if (keyCode === DOWNKEY || delta > LOW_SCROLL_SENSITIVITY) {
          this.pagechange_lock = true
          router.go({name: Store.state[this.$route.name].afterPage})
        } else if (keyCode === UPKEY || delta < -1 * LOW_SCROLL_SENSITIVITY) {
          this.pagechange_lock = true
          router.go({name: Store.state[this.$route.name].beforePage})
        }
      }
      if (Date.now() - this.last_scroll_time > 40) {
        this.pagechange_lock = false
      }
      this.last_scroll_time = Date.now()
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
  transition: opacity .3s linear

.fade-leave
  opacity: 0
body
  height: 100%
  min-height: 100%
  width: 100%

#app
  width: 100%
  height: 100%
  min-height: 100%
.intro_box
  margin-left: 7.5%
  padding: 2.6179em 1.618em
  width: 40%
  height: 85%
  p, h1, h4, h5, h6
    color: rgb(250,250,250)
    width: 100%
  h1, h4, h5, h6
    font-weight: 300
    margin-bottom: 1em
    text-align: center
  h1
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
</style>
