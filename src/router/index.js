import Vue from 'vue'
import Router from 'vue-router'
// components
import Hello from 'components/Hello'
import PadField from 'components/PadField'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pad',
      name: 'PadField',
      component: PadField
    }
  ]
})
