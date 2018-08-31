import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import {
  getComponent
} from './getComponent'

export const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: getComponent('/login')
  }
]

export default new Router({
  mode: 'history',
  routes
})