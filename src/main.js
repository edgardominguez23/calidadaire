import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'

axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

window.axios = require('axios');

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
