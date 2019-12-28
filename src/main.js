import Vue from "vue"
import App from "./App"
import request from "@/utils/request.js"
import handleNumber from "@/utils/filter.js"
Vue.config.productionTip = false

// Object.keys(filters).forEach(key => {
//   console.log(key)
//   Vue.filter(key, filters[key])
// })
Vue.filter('handleNumber',handleNumber)
const plugin = request({
  baseUrl: "http://netmusic.vip:3000"
})
Vue.use(plugin)
const app = new Vue({
  ...App
})
app.$mount()
