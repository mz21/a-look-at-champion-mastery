<template lang="jade">
#summoners_role_view
  .intro_box
    h2 02. THE SUMMONERS
    .implementation_tag(@click="show_methods()")
      svg.implementation_symbol(width="24px" height="24px" viewBox="864 144 24 24")
        g(stroke="none", stroke-width="1", fill="none", fill-rule="evenodd", transform="translate(864.000000, 144.000000)")
          path(d="M11,17 L13,17 L13,11 L11,11 L11,17 L11,17 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 L12,20 Z M11,9 L13,9 L13,7 L11,7 L11,9 L11,9 Z", fill-opacity="0.7", fill="#2DAAB7")
      p.methods_tag Methodology / Implementation Notes
    .implementation_box(v-show="show_note")
      svg.exit_icon(@click="show_methods()", width="14px", height="14px", viewBox="5 5 14 14")
        polygon(stroke="none", fill="rgb(245,245,245)", fill-rule="evenodd", points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12")
      h4 Methodology / Implementation Notes
      p Two arbitrary calculations are in play here: 1) how is a role determined a summoner's main and 2) which champs fit each role.
      p For #1, I took every summoner's 40 most recent ranked games and if over 35% of a summoner's games had the same role, listed that role as a main (Note: summoners can have up to 2 mains).
      p For #2, I used strictly my own definition for which champ counted for which role. This was especially problematic for flex roles (i.e. Ekko Top/Mid or Trundle Support/Jungle, which I generally ended up discarding).
      p Most mastered was determined by collecting the average mastery of all summoners who've played the champ at least once.
    h4.overview_question Play around with the picker below and take a look at the most commonly mastered champs each role plays on and off role. There isn't much diversity.
    h2.role_question 
      | what champions do the mains of all roles master at
      span.role_picked_tag {{picked_role}}
        select(v-model='picked_role')
          option(v-for='role in roles', :value='role') {{role}}
      | ?
  .content_box
    h5.by_role_summary The champs most frequently mastered at {{picked_role}} for every role's mains
    .by_role_box
      .by_role_column
        p.by_role_tag Rank
        .popularity_box
          p 1st
        .popularity_box
          p 2nd
        .popularity_box
          p 3rd
        .popularity_box
          p 4th
        .popularity_box
          p 5th
      .by_role_column
        p.by_role_tag Top
        .champion_box(v-for="champion in top_champions[this.picked_role]")
          img.champion_image(:src="get_champion_image(champion)")
      .by_role_column
        p.by_role_tag Jungle
        .champion_box(v-for="champion in jungle_champions[this.picked_role]")
          img.champion_image(:src="get_champion_image(champion)")
      .by_role_column
        p.by_role_tag Mid
        .champion_box(v-for="champion in mid_champions[this.picked_role]")
          img.champion_image(:src="get_champion_image(champion)")
      .by_role_column
        p.by_role_tag Support
        .champion_box(v-for="champion in support_champions[this.picked_role]")
          img.champion_image(:src="get_champion_image(champion)")
      .by_role_column
        p.by_role_tag ADC
        .champion_box(v-for="champion in adc_champions[this.picked_role]")
          img.champion_image(:src="get_champion_image(champion)")
</template>

<script>
export default {
  data: function () {
    return {
      picked_role: 'Top',
      roles: ['Top', 'Jungle', 'Mid', 'Support', 'ADC'],
      top_champions: {'Top': ['92', '245', '122', '114', '39'], 'Jungle': ['64', '107', '11', '5', '254'], 'Mid': ['157', '238', '131', '99', '103'], 'Support': ['412', '53', '89', '201', '25'], 'ADC': ['67', '222', '81', '236', '51']},
      jungle_champions: {'Top': ['92', '54', '114', '120', '23'], 'Jungle': ['64', '107', '11', '5', '35'], 'Mid': ['157', '238', '105', '99', '103'], 'Support': ['412', '53', '89', '201', '25'], 'ADC': ['67', '222', '81', '236', '51']},
      mid_champions: {'Top': ['92', '114', '54', '122', '24'], 'Jungle': ['64', '107', '11', '76', '5'], 'Mid': ['157', '238', '103', '105', '99'], 'Support': ['412', '53', '89', '201', '12'], 'ADC': ['67', '222', '81', '236', '51']},
      support_champions: {'Top': ['54', '245', '92', '150', '17'], 'Jungle': ['64', '106', '104', '5', '107'], 'Mid': ['99', '157', '238', '103', '90'], 'Support': ['412', '53', '201', '89', '40'], 'ADC': ['67', '222', '81', '236', '21']},
      adc_champions: {'Top': ['92', '245', '114', '150', '54'], 'Jungle': ['64', '107', '11', '5', '106'], 'Mid': ['157', '238', '103', '99', '105'], 'Support': ['412', '53', '25', '89', '201'], 'ADC': ['67', '222', '236', '81', '51']},
      show_note: false
    }
  },
  methods: {
    show_methods: function () {
      this.show_note = !this.show_note
    },
    get_champion_image (key) {
      return require('assets/img/' + key + '.png')
    }
  }
}
</script>

<style lang="sass" scoped>
#summoners_role_view
  width: 100%
  height: 100%
  background: rgba(120,120,120, 0.22)
  display: flex
  align-items: center
.content_box
  padding-top: 10%
  margin: 0 auto
  width: 45%
  h5.by_role_summary
    color: rgb(245,245,245)
    text-align: center
    margin-bottom: 1em
  .by_role_box
    margin: 0 auto
    width: 65%
    display: flex
    .by_role_column
      width: 20%
  .champion_box
    width: 100%
  .champion_image
    margin: 0 auto
    max-width: 94%
    height: auto
.intro_box
  text-align: center
  .role_question
    color: rgb(245,245,245)
    display: inline-block
    font-weight: 400
    margin: 0 auto
  .role_picked_tag
    border-bottom: 2px dotted rgb(245,245,245)
    cursor: pointer
    color: #367BD4
    display: inline-block
    font-weight: 700
    margin-left: 0.3em
    margin-right: 0.3em
    position: relative
    select
      width: 110%
      position: absolute
      left: 0
      background: transparent
      border-radius: 0
      border: 0
      font-size: 0.875em
      -webkit-appearance: none
      opacity: 0
.by_role_tag
  color: rgb(245,245,245)
  font-weight: 600
  text-align: center
.popularity_box
  margin: 0.25em
  width: 100%
  padding-bottom: 100%
  p
    color: rgb(245,245,245)
    position: absolute
    margin: 0 auto
.test
  height: 50px
  position: relative
.overlay_section
  background: rgba(242,242,242,0.22)
  padding: 2.6179em 1.618em
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center  
.select_section
  height: 3em
  width: 50%
  margin: 0 auto
  overflow: hidden
  background: rgba(231,244,245,0.3)
  border-radius: 0
  padding-left: 0.5em
  select
    height: 40px
    width: 110%
    background: transparent
    border-radius: 0
    border: 0
    font-size: 0.875em
    color: rgba(0,0,0,0)
    -webkit-appearance: none
</style>
