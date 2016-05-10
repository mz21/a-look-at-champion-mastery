<template lang="jade">
div
  h4.overview_question So higher champion mastery does matter. At what point does win rate plateau? Answer: On average, at around 50,000 mastery points.
  .overlay_section
    h5 WIN RATE OVER MASTERY
    #win_rate_chart_section
</template>

<script>
import d3 from 'd3'
export default {
  methods: {
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
