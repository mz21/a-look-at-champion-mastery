<template lang="jade">
#champions_intro_box
  .intro_box
    h1 03. THE CHAMPIONS
    h4 Pick a champion on the right to learn about its win rate over champion mastery, its typical champion mastery overall and with respect to elo, and its related champs.
    img.selected_champion_image(:src="get_champion_image(current_champ)")  
  .champion_images_box
    .champion_image_box(v-for="champion in champions", @click="set_current_champ(champion)")
      img.champion_image(:src="get_champion_image(champion)")
</template>

<script>
export default {
  data: function () {
    return {
      champions: ['266', '103', '84', '12', '32', '34', '1', '22', '136', '268', '432', '53', '63', '201', '51', '69', '31', '42', '122', '131', '36', '119', '245', '60', '28', '81', '9', '114', '105', '3', '41', '86', '150', '79', '104', '120', '74', '420', '39', '40', '59', '24', '126', '202', '222', '429', '43', '30', '38', '55', '10', '85', '121', '203', '96', '7', '64', '89', '127', '236', '117', '99', '54', '90', '57', '11', '21', '82', '25', '267', '75', '111', '76', '56', '20', '2', '61', '80', '78', '133', '33', '421', '58', '107', '92', '68', '13', '113', '35', '98', '102', '27', '14', '15', '72', '37', '16', '50', '134', '223', '91', '44', '17', '412', '18', '48', '23', '4', '29', '77', '6', '110', '67', '45', '161', '254', '112', '8', '106', '19', '62', '101', '5', '157', '83', '154', '238', '115', '26', '143'],
      current_champ: '1'
    }
  },
  methods: {
    get_champion_image (key) {
      return require('assets/img/' + key + '.png')
    },
    set_current_champ (champion) {
      console.log('test')
      this.current_champ = champion
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
  width: 40%
.champion_image_box
  width: 7.5%
  padding-bottom: 7.5%
  margin: 0.4%
  position: relative
  :hover
    border: 3px solid gold
    opacity: 0.6
.selected_champion_image
  max-width: 30%
  height: auto
.champion_image
  cursor: pointer
  position: absolute
  width: 100%
  height: auto
</style>
