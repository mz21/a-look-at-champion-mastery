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
      afterPage: 'championsintro'
    },
    'championsintro': {
      beforePage: 'byregionmastery',
      afterPage: 'addendum'
    },
    'addendum': {
      beforePage: 'championsintro',
      afterPage: 'root'
    },
    'root': {
      beforePage: 'addendum',
      afterPage: 'overviewintro'
    }
  }
}
