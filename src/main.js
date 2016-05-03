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
  },
  '/overview2': {
    component: function (resolve) {
      require(['./components/OverviewView2'], resolve)
    },
    subRoutes: {
      '/': {
        // This component will be rendered into Foo's <router-view>
        // when /foo is matched. Using an inline component definition
        // here for convenience.
        component: function (resolve) {
          require(['./components/OverviewIntro2'], resolve)
        }
      }
      // other sub routes...
    }
  }
  // '*': {
  //   component: function (resolve) {
  //     require(['./NotFoundView'], resolve)
  //   }
  // }
})

router.start(App, '#app')
