import Vue from 'vue'
import App from './App.vue'
import draglist from '../packages/index'
Vue.config.productionTip = false
Vue.component('draglist', draglist)
Vue.use(draglist)
new Vue({
  render: h => h(App)
}).$mount('#app')
