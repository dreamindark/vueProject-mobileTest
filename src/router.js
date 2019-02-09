import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import MyContainer from './components/tabbar/MyContainer.vue'
import ArticleList from './components/article/articleList.vue'
import ArticleInfo from './components/article/articleinfo.vue'

var router = new VueRouter({
    routes:[
        { path: '/' ,redirect:'/home' },
        { path: '/home' , component:HomeContainer},
        { path: '/member' , component:MemberContainer},
        { path: '/shop-car' , component:ShopContainer},
        { path: '/my' , component:MyContainer},
        { path: '/home/article' ,component:ArticleList},
        // { path: '/home/articleinfo/:id' ,component:ArticleInfo},
        { path: '/home/articleinfo' ,component:ArticleInfo},
    ],
    linkActiveClass:'mui-active'
})

export default router