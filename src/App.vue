<template lang="jade">
  div
    router-view
</template>

<script>
export default {
  ready: function () {
    // disables scrolling
    document.addEventListener('wheel', function (e) {
      e.preventDefault()
      return false
    }, false)
  }
}
</script>

<style lang="sass">
@import './assets/normalize.css'

html
  font-size: 16px
  font-family: "proxima-nova", "brandon-grotesque"
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiasted !important
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

body
  height: 100%
  min-height: 100%
  width: 100%

#app
  width: 100%
  height: 100%
  min-height: 100%
</style>
