<template>
    <div class="HomePage">
      <BetterScroll :data="recommend">
        <!--轮播-->
        <div class="swiperWarp">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(banner,index) in banners">
              <a :href="banner.linkUrl" :id="banner.id" class="link"><img class="img_auto" :src="banner.picUrl" alt=""></a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!--推荐歌单表-->
        <div class="hotRecommend">
          <div class="hotRecommend-title">热门歌单推荐</div>
          <div class="hotRecommend-content">
            <Media :data="recommend" />
          </div>
        </div>
      </BetterScroll>
    </div>
</template>

<script>
  import Media from '../../components/Media/Media'
  import BetterScroll  from '../../components/BetterScroll/BetterScroll'
  import {getBanner,getDiscues}from '../../api/index'
    export default {
      name: "Home",
      components:{
        Media,
        BetterScroll
      },
      data(){
        return {
          banners:[],
          recommend:[]
        }
      },
      created(){
        this._getBanner();
      },
      mounted(){
          this._getRecommends();
      },
      watch:{
        // swipers(){
        //   console.log(this.swipers);
        // }
      },
      methods:{
        _getBanner(){
          getBanner().then((res)=>{
            //console.log(res.data.slider);
            if(res.code===0) this.banners = res.data.slider
          })
        },
        async _getRecommends(){
          const result = await getDiscues()
          console.log(result);
          if(result.code ===0){
              this.recommend = result.data.list
          }
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"
.swiperWarp
  height:150px
  .mint-swipe-indicator
    opacity .8
  .swiperWarp .mint-swipe-indicator
    opacity 1
    .link
      display: block
.hotRecommend
  padding:20px 0;
  .hotRecommend-title
    color:$color-theme
    font-size:$font-size-medium
    text-align center
</style>
