import Vue from 'vue'
import Demo from './Demo.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(Demo)
})
