<template>
    <div class="cmt-container">
        <h3>评论</h3>
        <hr>
        <textarea placeholder="请输入要说的内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼
                </div>
                <div class="cmt-body">
                    无语
                </div>
            </div>
        </div>

        

        <mt-button type="primary" size="large">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    
    .cmt-container{
        h3{
            font-size:18px;
        }
        textarea{
            font-size:14px;
            height:85px;
            margin:0;
            
        }

        .cmt-list{
            
            margin-top: 5px;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height:30px;
                    background-color:#ccc;
                }
                .cmt-body{
                    line-height:35px;
                    text-index:2em;
                }
            }
        }
    }
</style>