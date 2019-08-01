<template>
    <div class="page">
        <transition name="miniPlay">
          <div class="play OpaTran" v-show="playFullShow">
              <div class="back" @click="back">
                <i class="icon-back"></i>
              </div>
              <div class="title">
                <h3 class="songName">{{currentSong.name}}</h3>
                <p class="name">{{currentSong.singer}}</p>
              </div>
              <div class="songImg">
                  <div class="songImgContent"><img class="img_auto" :src="currentSong.image" alt=""></div>
              </div>
              <div class="song"></div>
              <div class="progress">
                <div class="flex progressContent">
                  <span class="curTime time">{{_format(currentTime)}}</span>
                  <div class="progressBar">
                    <mt-progress :value="percentage" :bar-height="4"></mt-progress>
                    <!--<mt-range disabled="" :value="percentage" v-model="rangeValue" @touchend="middleTouchEnd" :bar-height="4"></mt-range>-->
                  </div>
                  <span class="totalTime time">{{_format(currentSong.duration)}}</span>
                </div>
              </div>
              <div class="flex operators">
                <div class="icon i-left" @click="_modePlay">
                  <i class="icon-sequence"></i>
                </div>
                <div class="icon i-left" @click="_changePlayuMusic('prev')">
                  <i class="icon-prev"></i>
                </div>
                <div class="icon i-center" @click="togglePlay">
                  <i :class="playStatus?'icon-pause':'icon-play'"></i>
                </div>
                <div class="icon i-right" @click="_changePlayuMusic('next')">
                  <i class="icon-next"></i>
                </div>
                <div class="icon i-right">
                  <i class="icon-not-favorite"></i>
                </div>
              </div>
          </div>
        </transition>
        <transition name="miniPlay">
          <div class="flex minPlay OpaTran" v-show="!playFullShow">
            <div class="minImgContent" @click="back"><img class="img_auto" :src="currentSong.image" alt=""></div>
            <div class="flex minTitle" @click="back">
              <h3 class="songName">{{currentSong.name}}</h3>
              <p class="name">{{currentSong.singer}}</p>
            </div>
            <div class="control" @click="togglePlay">
              <i :class="playStatus?'icon-pause':'icon-play'"></i>
            </div>
            <div class="control">
              <i class="icon-playlist"></i>
            </div>
          </div>
        </transition>

      <audio :src="currentSong.url" @timeupdate="_uploadTime" @canplay="_ready" @ended="_playEnd" ref="aduioEle"></audio>
    </div>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    import {resetRandomList} from '../../assets/js/song'
    export default {
      name: "SongPlay",
      data(){
          return{
            rangeValue:0,
            currentTime:0,
            isPlaying:false,
            isReady:false,
          }
      },
      computed:{
        ...mapGetters(['playStatus','currentSong','randomSongsList','currentPlayIndex','playFullShow','playingList','playMode','orderSongsList']),
        percentage(){
          let {currentTime} = this
          return (currentTime/this.currentSong.duration)*100
        },
      },
      watch:{
        currentSong(newSong){
          console.log('watch--currentSong');
         if(newSong.id){
             // url 改变了
           this.currentTime=0
           this.$nextTick(()=>{
             if(this.playStatus && this.audio.paused) {
               //console.log('play');
               this.$refs.aduioEle.play()
             }
           })
         }
        },
        rangeValue(e){
         //console.log(e);
         if(this.playStatus) audio.pause()
         let seek = (e*this.currentSong.duration)/100
          this.audio.seekable.start(seek)

         audio.currentTime = seek;
         if(this.playStatus) audio.play()
        }
      },
      created(){},
      mounted(){
        this.audio = this.$refs.aduioEle
      },
      methods:{
        _modePlay(){
          // 随机播放  获取当前的播放列表和 index.
          //let mode = this.playMode
          //mode = mode <2? mode+1:0
          this.$store.dispatch('changePlayMode')
        },
        _orderPlay(){
          //console.log('0');
          return this.orderSongsList
        },
        _singerPlay(){
          //console.log('2');
          return this.currentSong
        },
        togglePlay(){
          let status = !this.playStatus
          this._changePalyStatus(status)
          if(status){
            this.audio.play()
          }else{
            this.audio.pause()
          }
        },
        back(){
          // 改变播放的状态 小播发器 还是全屏
          const status =!this.playFullShow
          this._setPalyFull(status)
        },
        _changePlayuMusic(type){
          if(this.playMode ===2){
            this.audio.loop()
          }
          this.$store.dispatch('changePlayMusic',type)
        },
        ...mapMutations({
          _setPalyFull:'playFullShow',
          _changePalyStatus:'playStatus',
        }),
        _format(value){
          let s = parseInt(value/60)
          let m = parseInt(value%60)
          if(m<10) m = '0'+m
          return  `${s}:${m}`
        },
        _uploadTime(e){
          this.currentTime = e.target.currentTime
          //console.log(e.target.currentTime);
        },
        _ready(e){
         //this.togglePlay()
          this.isReady = true
          if(this.playStatus){
            this.audio.play()
          }
         // 判断此时应该需要播放的状态，来进行播放
        },
        _playEnd(){
            // 播放结束之后应该切换到下一首
          this.isPlaying = false
          this.isReady = false
          let type='next'
          if(this.playMode ===2){
            this.audio.currentTime = 0
            this.audio.play()
          }
          this.$store.dispatch('changePlayMusic',type)
        },
        middleTouchEnd(){
            //console.log('jkjkjk');
            //console.log(this.rangeValue);
        }
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/variable.styl"
  @import "../../assets/stylus/transition.styl";
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
  .progress
    position fixed
    bottom:120px
    width:100%
    .time
      font-size:$font-size-medium
      color:$color-dialog-background
    .progressBar
      width:60%
      margin:0 14px

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


/deep/  .mt-range-content
  margin-right:0
/deep/ .mt-range-runway
  border-top-color:$color-highlight-background
  right: 0
/deep/ .mt-range-progress
  background:$color-theme
/deep/ .mt-range-thumb
  width:9px;
  height:9px;
  background:$color-theme-d
  border:1px solid #fff
  top: 50%;
  transform: translateY(-50%);
</style>
