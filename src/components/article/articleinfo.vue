<template>
    <div>
        <h3>文章</h3>

        <!--评论-->
    <comment-box></comment-box>
    </div>

    
</template>

<script>

import comment from '../subcomponents/comment.vue'

export default {

    components:{
        "comment-box":comment
    }

}
</script>

<style lang="scss" scoped>
    
</style>