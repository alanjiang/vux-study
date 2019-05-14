import Vue from 'vue'

import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App.vue'
import Hello from './components/HelloFromVux'
import My from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import chart from './components/chart.vue'
Vue.use(VueRouter)

const routes = [{path: '/', component: chart}, {path: '/my', component: My}, {path: '/hello', component: Hello}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
