// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store  from './store'

// 全局引入 mint-ui 组件
import MintUi from 'mint-ui'
//import { Swipe, SwipeItem } from 'mint-ui';
//Vue.component(Swipe.name, Swipe);
//Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css';
Vue.use(MintUi)
import './assets/stylus/index.styl'

// vue-lazyload
import VueLazyloader from 'vue-lazyload'
import lazyloadingImg from './assets/images/lazyDefault.png'
Vue.use(VueLazyloader,{
    loading:lazyloadingImg
})


Vue.config.productionTip = false

fastClick.attach(document.body)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
