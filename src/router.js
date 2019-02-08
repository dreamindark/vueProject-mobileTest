import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import MyContainer from './components/tabbar/MyContainer.vue'

var router = new VueRouter({
    routes:[
        { path: '/' ,redirect:'/home' },
        { path: '/home' , component:HomeContainer},
        { path: '/member' , component:MemberContainer},
        { path: '/shop-car' , component:ShopContainer},
        { path: '/my' , component:MyContainer},
    ],
    linkActiveClass:'mui-active'
})

export default router