import Vue from 'vue'
import App from './App.vue'
import axios from './axios/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  axios
}).$mount('#app')
