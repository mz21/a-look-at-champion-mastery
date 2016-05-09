export default {
  state: {
    'overviewintro': {
      beforePage: 'root',
      afterPage: 'overviewbyrank'
    },
    'overviewbyrank': {
      beforePage: 'overviewintro',
      afterPage: 'overviewbytimespent'
    },
    'overviewbytimespent': {
      beforePage: 'overviewbyrank',
      afterPage: 'overviewbywinrate'
    },
    'overviewbywinrate': {
      beforePage: 'overviewbytimespent',
      afterPage: 'overviewmasteryplateau'
    },
    'overviewmasteryplateau': {
      beforePage: 'overviewbywinrate',
      afterPage: 'summonersintro'
    },
    'summonersintro': {
      beforePage: 'overviewmasteryplateau',
      afterPage: 'summonersbyrole'
    },
    'summonersbyrole': {
      beforePage: 'summonersintro',
      afterPage: 'byregionmastery'
    },
    'byregionmastery': {
      beforePage: 'summonersbyrole',
      afterPage: 'byrank'
    },
    'byrank': {
      beforePage: 'byregionmastery',
      afterPage: 'championsintro'
    },
    'championsintro': {
      beforePage: 'byrank',
      afterPage: 'championsplayrate'
    },
    'championsplayrate': {
      beforePage: 'championsintro',
      afterPage: 'championssummary'
    },
    'championssummary': {
      beforePage: 'championsplayrate',
      afterPage: 'root'
    },
    'root': {
      beforePage: 'championssummary',
      afterPage: 'overviewintro'
    }
  }
}
