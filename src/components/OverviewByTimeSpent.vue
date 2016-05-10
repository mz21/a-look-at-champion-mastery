<template lang="jade">
div
  .implementation_tag(@click="show_methods()")
    svg.implementation_symbol(width="24px" height="24px" viewBox="864 144 24 24")
      g(stroke="none", stroke-width="1", fill="none", fill-rule="evenodd", transform="translate(864.000000, 144.000000)")
        path(d="M11,17 L13,17 L13,11 L11,11 L11,17 L11,17 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 L12,20 Z M11,9 L13,9 L13,7 L11,7 L11,9 L11,9 Z", fill-opacity="0.7", fill="#2DAAB7")
    p.methods_tag Methodology / Implementation Notes
  .implementation_box(v-show="show_note")
    svg.exit_icon(@click="show_methods()", width="14px", height="14px", viewBox="5 5 14 14")
      polygon(stroke="none", fill="rgb(245,245,245)", fill-rule="evenodd", points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12")
    h4 Methodology / Implementation Notes
    p The % of mastery is taken over solely the 15 most played champs. The exact formula is [% of mastery] = [nth most played] / [sum of 1-15th most played].
  h4.overview_question We can also see how the average summoner distributes their champion mastery points.
  .overlay_section
    h5 MASTERY DISTRIBUTION BY %
    p From left to right, the % of mastery points for each champ among the summoner's top 15 champs.
    #mastery_distribution_section
      .individual_champ_mastery(v-for="mastery in mastery_distribution", :style="{height: mastery*800 + 'px'}")
        h6 {{(mastery*100).toFixed(1)}}
</template>

<script>
export default {
  data: function () {
    return {
      mastery_distribution: [ 0.221,
      0.133,
      0.100,
      0.081,
      0.069,
      0.060,
      0.053,
      0.047,
      0.043,
      0.039,
      0.036,
      0.033,
      0.031,
      0.029,
      0.027 ],
      show_note: false
    }
  },
  methods: {
    show_methods: function () {
      this.show_note = !this.show_note
    }
  }
}
</script>

<style lang="sass" scoped>
#mastery_distribution_section
  width: 90%
  display: flex
  align-items: flex-end
  justify-content: space-between
  .individual_champ_mastery
    width: 6.1%
    // height: 200px
    background: rgb(50,50,60)
</style>
