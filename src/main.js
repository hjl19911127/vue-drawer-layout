import 'normalize.css'
import Vue from 'vue'
import App from './App.vue'
import DrawerLayout from './lib/index'

Vue.config.productionTip = false
Vue.use(DrawerLayout)

new Vue({
  render: h => h(App)
}).$mount('#app')
