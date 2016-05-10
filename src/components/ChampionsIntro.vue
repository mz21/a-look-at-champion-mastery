<template lang="jade">
#champions_intro_box
  .intro_box
    h2 03. THE CHAMPIONS
    .implementation_tag(@click="show_methods()")
      svg.implementation_symbol(width="24px" height="24px" viewBox="864 144 24 24")
        g(stroke="none", stroke-width="1", fill="none", fill-rule="evenodd", transform="translate(864.000000, 144.000000)")
          path(d="M11,17 L13,17 L13,11 L11,11 L11,17 L11,17 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 L12,20 Z M11,9 L13,9 L13,7 L11,7 L11,9 L11,9 Z", fill-opacity="0.7", fill="#2DAAB7")
      p.methods_tag Methodology / Implementation Notes
    .implementation_box(v-show="show_note")
      svg.exit_icon(@click="show_methods()", width="14px", height="14px", viewBox="5 5 14 14")
        polygon(stroke="none", fill="rgb(245,245,245)", fill-rule="evenodd", points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12")
      h4 Methodology / Implementation Notes
      p Champion Mastery Score Rank is calculated by counting the number of summoners with Rank 5 mastery.
      p The 'Champs Commonly Mastered' together section is calculated as follows: 1) get the % of summoners with Rank 5 mastery for every single champion, 2) for all summoners with Rank 5 mastery *for the selected champ*, get the % of summoners with Rank 5 mastery for every other champion, 3) get the % increase between the two ratios and sort.
      p This approach beats a raw counts approach because for raw counts every champ would just show the most mastered champs (Vayne, Lee Sin, Thresh) rather than the champs it has special affinity for. The drawback here is that champs with lower sample size (i.e. Urgot, Galio) can have disproportionate ratios.
    h4 Pick a champ in the grid to see which champs are mastered the most and which champs get mastered together.
    .selected_summoner_box
      .champion_box
        img.selected_champion_image(:src="get_large_champion_image(currentChamp)")
      .champ_content_box
        h4.champion_name {{get_champion_name(currentChamp)}}
        .most_mastered_box
          h6 Champion Mastery Score Rank
          h2.rank_tag {{get_champion_rank(currentChamp)}}/130
        .related_champs_box
          h6 Champs Commonly Mastered With {{get_champion_name(currentChamp)}}
          .related_champion_image_box(v-for="champion in champions_in_common[currentChamp].slice(0,12)")
            .related_champion_index
              {{$index + 1}}
            img.related_champion_image(:src="get_champion_image(champion.champ)")
  .champion_images_box
    .champion_image_box(v-for="champion in champions", @click="set_current_champ(champion)")
      img.champion_image(:src="get_champion_image(champion)")
</template>

<script>
export default {
  data: function () {
    return {
      champions: ['266', '103', '84', '12', '32', '34', '1', '22', '136', '268', '432', '53', '63', '201', '51', '69', '31', '42', '122', '131', '36', '119', '245', '60', '28', '81', '9', '114', '105', '3', '41', '86', '150', '79', '104', '120', '74', '420', '39', '40', '59', '24', '126', '202', '222', '429', '43', '30', '38', '55', '10', '85', '121', '203', '96', '7', '64', '89', '127', '236', '117', '99', '54', '90', '57', '11', '21', '82', '25', '267', '75', '111', '76', '56', '20', '2', '61', '80', '78', '133', '33', '421', '58', '107', '92', '68', '13', '113', '35', '98', '102', '27', '14', '15', '72', '37', '16', '50', '134', '223', '91', '44', '17', '412', '18', '48', '23', '4', '29', '77', '6', '110', '67', '45', '161', '254', '112', '8', '106', '19', '62', '101', '5', '157', '83', '154', '238', '115', '26', '143'],
      champions_in_common: require('assets/data/champCorrelationsSorted.json'),
      currentChamp: '7',
      championsRank: require('assets/data/mostMasteredChamps.json'),
      show_note: false
    }
  },
  methods: {
    show_methods: function () {
      this.show_note = !this.show_note
    },
    get_champion_name (key) {
      let championNameDict = require('assets/data/championData.json')
      return championNameDict[key]
    },
    get_champion_image (key) {
      return require('assets/img/' + key + '.png')
    },
    get_large_champion_image (key) {
      return require('assets/img/' + key + '-large.jpg')
    },
    set_current_champ (champion) {
      this.currentChamp = champion
    },
    get_champion_rank (champion) {
      for (let i = 0; i < this.championsRank.length; i++) {
        if (this.championsRank[i].champ === champion) {
          return this.championsRank[i].rank
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#champions_intro_box
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: space-around
.champion_images_box
  display: flex
  flex-wrap: wrap
  width: 42%
.champion_image_box
  width: 7.2%
  padding-bottom: 7.2%
  margin: 0.4%
  position: relative
  :hover
    border: 3px solid gold
    opacity: 0.6
.selected_summoner_box
  width: 100%
  display: flex
.champion_box
  width: 36%
.champ_content_box
  display: flex
  flex-wrap: wrap
  align-content: center
  justify-content: center
  width: 63%
.selected_champion_image
  max-width: 100%
  height: auto
.related_champs_box
  display: flex
  flex-wrap: wrap
  width: 85%
  margin: 0 auto
  margin-bottom: 0.78em
  h6
    font-weight: 400
    margin-bottom: 0.25em
#win_rate_chart_section
  width: 100%
.most_mastered_box
  margin-bottom: 1em
  h6
    font-weight: 400
    margin-bottom: 0.25em
  h2
    color: rgb(225,225,235)
    font-weight: 800
    text-align: center
.related_champion_image_box
  width: 16.6%
  padding-bottom: 16.6%
  position: relative
.related_champion_index
  position: absolute
  left: 60%
  top: 60%
  color: rgb(245,245,245)
  font-weight: 600
  z-index: 100
.related_champion_image
  max-width: 100%
  height: auto
  position: absolute
.champion_image
  cursor: pointer
  position: absolute
  top: 0
  width: 100%
  height: auto
h4.champion_name
  font-weight: 600
  font-size: 1.618em
</style>
