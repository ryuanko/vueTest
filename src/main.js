import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'

import router from './router'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './assets/ag-grid.css'
import './assets/icis.css'


Vue.config.productionTip = false
//Vue.use(Antd)
const bus = new Vue() // 버스

Vue.prototype.$bus = bus
Vue.prototype.$http = axios

axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT

//Axios Interceptors
axios.interceptors.request.use( config => {
  if (config.method === 'get') {
    if (config.params === undefined) config.params = {}
    config.params._ = (new Date().getTime())
  }
  return config
}, err => {
  return Promise.reject(err)
})


axios.interceptors.response.use( response => {
  return response
}, error => {

  return Promise.reject(error)
})


import common from '@/views/common'

import crud from '@/views/crud'
Vue.use(crud, {router})

new Vue({
  created () {
    common.init(router)
  },  
  router,
  render: h => h(App),
}).$mount('#app')
