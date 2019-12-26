import Vue from 'vue'
import App from './App'
import request from '@/utils/request.js'
Vue.config.productionTip = false

App.mpType = 'app'
const plugin = request({
  baseUrl : 'http://netmusic.vip:3000'
})
Vue.use(plugin)
const app = new Vue({
  ...App
})
app.$mount()
