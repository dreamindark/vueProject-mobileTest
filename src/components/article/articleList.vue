<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<!--<router-link :to="'/home/articleinfo/' +item.id">-->
					<router-link to="/home/articleinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
					</a>
                    </router-link>
				</li>
			</ul>
            
    </div>
</template>

<script>


export default {
    data(){
        return {
            articlelist:[]
        }
    },
    created() {
        this.getArticleList()
    },
    methods: {
        getArticleList(){
            this.$http.get('').then(result=>{

            })
        }
    },
    
}
</script>

<style lang="scss" scoped>
    
</style>