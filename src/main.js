import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import TableOfContentsView from './components/TableOfContentsView'

Vue.use(VueRouter)

var router = new VueRouter({history: true})

router.map({
  '/': {
    name: 'root',
    component: TableOfContentsView
  },
  '/overview': {
    name: 'overview',
    component: function (resolve) {
      require(['./components/OverviewView2'], resolve)
    },
    subRoutes: {
      '/': {
        name: 'overviewintro',
        component: function (resolve) {
          require(['./components/OverviewIntro2'], resolve)
        }
      },
      '/by-rank': {
        name: 'overviewbyrank',
        component: function (resolve) {
          require(['./components/OverviewByRank'], resolve)
        }
      },
      '/by-mastery-percentage': {
        name: 'overviewbytimespent',
        component: function (resolve) {
          require(['./components/OverviewByTimeSpent'], resolve)
        }
      },
      '/by-win-rate': {
        name: 'overviewbywinrate',
        component: function (resolve) {
          require(['./components/OverviewByWinRate'], resolve)
        }
      },
      '/mastery-plateau': {
        name: 'overviewmasteryplateau',
        component: function (resolve) {
          require(['./components/OverviewMasteryPlateau'], resolve)
        }
      }
    }
  },
  '/summoners': {
    name: 'summoners',
    component: function (resolve) {
      require(['./components/SummonersView'], resolve)
    },
    subRoutes: {
      '/': {
        name: 'summonersintro',
        component: function (resolve) {
          require(['./components/SummonersIntro'], resolve)
        }
      },
      '/by-role': {
        name: 'summonersbyrole',
        component: function (resolve) {
          require(['./components/SummonersByRole'], resolve)
        }
      },
      '/by-region-mastery': {
        name: 'byregionmastery',
        component: function (resolve) {
          require(['./components/SummonersByRegionMastery'], resolve)
        }
      }
    }
  },
  '/champions': {
    name: 'champions',
    component: function (resolve) {
      require(['./components/ChampionsView'], resolve)
    },
    subRoutes: {
      '/': {
        name: 'championsintro',
        component: function (resolve) {
          require(['./components/ChampionsIntro'], resolve)
        }
      }
    }
  }
  // '*': {
  //   component: function (resolve) {
  //     require(['./NotFoundView'], resolve)
  //   }
  // }
})

router.start(App, '#app')
