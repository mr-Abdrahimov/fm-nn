import Vue from 'vue'
import VueDragscroll from 'vue-dragscroll'
import VueScrollTo from 'vue-scrollto'

import VueTippy, { TippyComponent } from 'vue-tippy'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tippy.js/themes/light.css'

Vue.config.productionTip = false
Vue.use(VueDragscroll)

Vue.use(VueTippy, {
  animation: 'scale',
  animateFill: false,
  theme: 'light'
})

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.component('tippy', TippyComponent)

new Vue({
  router,
  store,
  VueScrollTo,
  render: h => h(App)
}).$mount('#app')
