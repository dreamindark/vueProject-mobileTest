<template>
    <div class="app-container">
        
        <mt-header fixed title="个人vue项目"></mt-header>
        

        <transition>
            <router-view></router-view>
        </transition>
        
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop-car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
				<span class="mui-icon mui-icon-gear"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
        
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .app-container{
        padding-top:40px;
        padding-bottom:50px;
        overflow-x:hidden;
    }

    .v-enter{
        opacity:0;
        transform:translateX(100%);
    }

    
    .v-leave-to{
        opacity:0;
        transform:translateX(-100%);
        position:absolute;
    }

    .v-enter-active,
    .v-leave-active{
        transition:all 0.5s ease
    }

</style>