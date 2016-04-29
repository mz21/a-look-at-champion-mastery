import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import TableOfContentsView from './components/TableOfContentsView'

Vue.use(VueRouter)

var router = new VueRouter({history: true})

router.map({
  '/': {
    component: TableOfContentsView
  },
  '/overview': {
    component: function (resolve) {
      require(['./components/OverviewView'], resolve)
    }
  }
  // '*': {
  //   component: function (resolve) {
  //     require(['./NotFoundView'], resolve)
  //   }
  // }
})

router.start(App, '#app')
