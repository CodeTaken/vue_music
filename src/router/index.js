import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Singer from '../pages/Singer/Singer'
import Rank from '../pages/Rank/Rank'
import Search from '../pages/Search/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
