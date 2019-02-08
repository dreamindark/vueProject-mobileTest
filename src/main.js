import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import router from './router.js'


import app from './App.vue'
Vue.use(MintUI)

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})