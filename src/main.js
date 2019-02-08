import Vue from 'vue'

import './lib/mui/css/mui.min.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'



import app from './App.vue'
Vue.use(MintUI)

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})