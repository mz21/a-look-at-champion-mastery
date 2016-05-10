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
    p Win rate is taken over exclusively ranked games. Surprisingly tricky to implement. At extremely low levels of champion mastery, the win rate is to an extent self-selecting. For example, the win rate for a champion with under 500 points of mastery is ~7%. This isn't because summoners are that bad at that level of mastery but rather because had the summoner won the game, they likely would have achieved over 500 points of mastery and thus not been in that category. I started with 3,000 points of mastery as a good compromise between avoiding a self-selected result yet showing the drastic decline in performance with lower champion mastery.
    p Mastery points is also not exact (the sample size for summoners with exactly 20,000 mastery points is low) but bucketed. Bucket sizes ranged from intervals of 1000 points at lower ranks to 10,000 at higher ranks.
  h4.overview_question So higher champion mastery does matter. At what point does win rate plateau? Answer: On average, at around 50,000 mastery points.
  .overlay_section
    h5 WIN RATE BY MASTERY
    #win_rate_chart_section
</template>

<script>
import d3 from 'd3'
export default {
  data: function () {
    return {
      show_note: false
    }
  },
  methods: {
    show_methods: function () {
      this.show_note = !this.show_note
    },
    create_win_rate_chart: function () {
      let margin = 40
      let width = 600
      let height = 360
      let xScale = d3.scale.linear()
                  .domain([0, 80000])
                  .range([margin, width - margin])
      let yScale = d3.scale.linear()
                  .domain([25, 60])
                  .range([height - margin, margin])
      let xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient('bottom')
                  .tickSize(2)
                  .ticks(6)
                  .tickFormat(d3.format('0f'))
      let yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient('left')
                  .tickSize(4)
                  .ticks(4)
                  .tickFormat(d3.format('0f'))
      let valueline = d3.svg.line()
      .x(function (d) { return xScale(d.mastery) })
      .y(function (d) { return yScale(parseInt(d.winRate)) })
      let winRatesData = require('assets/data/winRatesByMastery.json')

      let svg = d3.select('#win_rate_chart_section').append('svg')
                  .attr('width', '100%')
                  .attr('height', '60%')
                  .attr('viewBox', '0 0 ' + width + ' ' + height)
                  .attr('class', 'win_rate_chart')
      svg.append('g')
      .attr('transform', 'translate(0, ' + (height - margin) + ')')
      .attr('class', 'axis')
      .call(xAxis)

      svg.append('g')
      .attr('transform', 'translate(' + margin + ', 0)')
      .attr('class', 'axis')
      .call(yAxis)

      svg.append('path')
      .attr('class', 'line')
      .attr('d', valueline(winRatesData))
    }
  },
  ready: function () {
    this.create_win_rate_chart()
  }
}
</script>

<style lang="sass">
#win_rate_chart_section
  width: 90%
  margin: 0 auto
svg.win_rate_chart
  .axis path, .axis line
    fill: none
    stroke: rgb(200,200,180)
    stroke-width: 1
    shape-rendering: crispEdges
  .axis text
    font-family: 'proxima-nova'
    font-size: 1em
    fill: rgb(200,200,180)
  path
    stroke: #A2A516
    stroke-width: 3
    fill: none

</style>
