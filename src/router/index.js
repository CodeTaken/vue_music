import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Singer from '../pages/Singer/Singer'
import Rank from '../pages/Rank/Rank'
import Search from '../pages/Search/Search'
import SingerDetail from '../pages/SingerDetail/SingerDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        headerStatus:true,
        tabStatus:true
      }
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      meta:{
        headerStatus:true,
        tabStatus:true
      }
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      meta:{
        headerStatus:true,
        tabStatus:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        headerStatus:true,
        tabStatus:true
      }
    },
    {
      path: '/singerDetail',
      name: 'SingerDetail',
      component: SingerDetail,

    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
