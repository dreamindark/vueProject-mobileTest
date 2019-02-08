<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <!-- -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">我的</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">你的</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">电话</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">阅读</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">看一看</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">更多</div></a></li>
		        </ul> 

        <h3>home</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    created() {
        this.getLunbotu
    },
    methods: {
        getLunbotu(){
            this.$http.get('http://www.baidu.com').then(result=>{
                console.log('ok')

            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color:red;
            }
            &:nth-child(2){
                background-color:blue;
            }
            &:nth-child(3){
                background-color:yellow;
            }
        }
    }

    .mui-grid-view .mui-grid-9{
        background-color:#fff;
        border:none;
    }


</style>