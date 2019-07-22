<template>
    <div :data="data">
        <div class="flex mediaGroup" v-for="(media,index) in data">
            <div class="flex contentLeft">
              <img class="img_auto" v-lazy="media.imgurl" alt="">
            </div>
            <div class="flex contentRight">
              <h3 class="name" v-html="media.creator.name"></h3>
              <p class="desc" v-html="media.dissname"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: "Media",
      props:{
        data:Array
      },
      data (){
          return {
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"
.mediaGroup
  padding:10px 20px;
  justify-content flex-start
  .contentLeft
    width:50px;
  .contentRight
    flex-direction column
    align-items flex-start
    margin-left:20px
    font-size:$font-size-medium
    .name
      margin-bottom:10px
    .desc
      color:$color-dialog-background
</style>
