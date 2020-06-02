import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.VUE_APP_BASE,
  mode: 'history',
  linkActiveClass: 'on',
  linkExactActiveClass: ''
})
