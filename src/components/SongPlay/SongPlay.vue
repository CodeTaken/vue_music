<template>
    <div class="page">
        <div class="play" v-show="!playStatus">
            <div class="back" @click="back">
              <i class="icon-back"></i>
            </div>
            <div class="title">
              <h3 class="songName">来自天堂的魔鬼</h3>
              <p class="name">G.E.M. 邓紫棋</p>
            </div>
            <div class="songImg">
                <div class="songImgContent"><img class="img_auto" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000" alt=""></div>
            </div>
            <div class="song"></div>
            <div class="flex operators">
              <div class="icon i-left">
                <i class="icon-sequence"></i>
              </div>
              <div class="icon i-left">
                <i class="icon-prev"></i>
              </div>
              <div class="icon i-center">
                <i class="icon-pause"></i>
              </div>
              <div class="icon i-right">
                <i class="icon-next"></i>
              </div>
              <div class="icon i-right">
                <i class="icon-not-favorite"></i>
              </div>
            </div>
        </div>
        <div class="flex minPlay" v-show="playStatus">
            <div class="minImgContent" @click="back"><img class="img_auto" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000" alt=""></div>
            <div class="flex minTitle" @click="back">
              <h3 class="songName">来自天堂的魔鬼</h3>
              <p class="name">G.E.M. 邓紫棋</p>
            </div>
          <div class="control">
              <i class="icon-mini icon-pause-mini"></i>
          </div>
          <div class="control">
            <i class="icon-playlist"></i>
          </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    export default {
      name: "SongPlay",
      computed:{
        ...mapGetters(['playStatus','currentSong','randomSongsList','currentPlayIndex'])
      },
      watch:{},
      created(){},
      mounted(){},
      methods:{
        back(){
          // 改变播放的状态 小播发器 还是全屏
          const status =!this.playStatus
          this._setPalyFull(status)
        },

        ...mapMutations({
          _setPalyFull:'playStatus'
        }),
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/variable.styl"
.play
  position fixed
  top:0
  bottom:0
  left:0
  right:0
  width: 100%
  z-index:101
  background:#222
  .back
    position fixed;
    top:10px;
    left:10px;
    z-index:100
    .icon-back
      color:$color-theme
      font-size:$font-size-medium-x
  .title
    font-size:$font-size-large
    color:$color-text
    text-align center
    .songName
      padding:20px 0
    .name
      font-size:$font-size-small
      margin-bottom:20px
  .songImg
      width:100%;
      height:0
      padding-top:80%
      margin:0 auto

      position relative
      .songImgContent
        position absolute
        top:0;
        left:50%;
        width:80%;
        transform translateX(-50%)
        height:100%;
        border-radius 50%
        overflow: hidden;
        border:10px solid $color-dialog-background
  .operators
    position fixed
    bottom:60px
    width:100%
    justify-content: space-around;
    .icon
      font-size:30px;
      color:$color-theme
 .minPlay
  position fixed
  width: 100%
  background:$color-highlight-background
  z-index: 102;
  height: 60px;
  bottom:0;
  justify-content flex-start
  padding:0 30px
  box-sizing: border-box;
  .minImgContent
    width:40px;
    height:40px;
    border-radius 50%
    overflow hidden
    margin-right:10px
  .minTitle
    flex-direction column
    align-items flex-start
    color:$color-text
    flex 1
    .songName
      font-size:$font-size-small
      margin-bottom:5px;
    .name
      font-size:$font-size-small-s
  .control
    width:30px
    font-size:30px;
    color:$color-theme
    margin-left:20px
</style>
