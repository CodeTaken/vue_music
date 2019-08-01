<template>
    <div class="page">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>
      <div class="bold title">{{title}}</div>
      <div class="singerHeader" ref="singerHeader">
         <img class="ImgAuto" :src="bgImage" alt="" ref="">
         <div class="play-wrapper">
          <div ref="playBtn" v-show="songs.length>0" class="play" @click="_random(songs,0,1)">
            <i class="icon-play"></i>
            <span class="text">随机播放全部</span>
          </div>
        </div>
         <div class="filter" ref="filter"></div>
      </div>
      <div class="bg-layer" ref="layer"></div>
      <BetterScroll class="bscroll" ref="bscroll" :probeType="3" @scrollStart="_scrollStart">
        <div class="content">
            <div v-for="(song,index) in songs" :key="index" @click="playAudio(songs,index)">
               <SongList :song="song" />
            </div>
        </div>
      </BetterScroll>
    </div>
</template>

<script>
  import BetterScroll  from '../../components/BetterScroll/BetterScroll.vue'
  import SongList from '../../components/SongList/SongList'
  import {getSingerDetail} from '../../api/index'
  import {createSong} from '../../assets/js/song'
  import {mapMutations,mapActions} from 'vuex'
  const FIXSCROLL =40;
  var originHeight=0
    export default {
      data () {
          return {
            songs:[],
            bgImage:`http://y.gtimg.cn/music/photo_new/T001R300x300M000${this.$route.query.id}.jpg?max_age=2592000`,
            singerHeader:0,
            scrollY:0,
          }
      },
      components:{
        BetterScroll,
        SongList
      },
      created(){
          //console.log(this.$route.query.id)
        this._getSingerDetail()
        //this.$store.dispatch('receoveSingerDetail',this.$route.query.id)

        // 获取 singerHeader 的 高度

      },
      mounted(){
        const height = this.$refs.singerHeader.offsetHeight
        originHeight = height
        this.singerHeader = height
        this.maxUpHeight = this.singerHeader + FIXSCROLL
        this.$refs.bscroll.$el.style.top = `${height}px`
      },
      watch:{
        //singerHeader(){
          //console.log(this.singerHeader)
          //this.$refs.bscroll.$el.style.top = `${this.singerHeader}px`
       // },
        scrollY(newVal){
          // 监听 y 的变化，如果是正数，放大图片  否则缩小图片高度
          let scale = 1
          let zIndex = 0
          let blur = 0
          let ScrollY = 0
          const percent = Math.abs(newVal / (this.singerHeader * 5))
          if(newVal >=0 ){
            this.$refs.playBtn.style.display = 'block'
            scale = 1 + percent
            //ScrollY = newVal >= FIXSCROLL?this.singerHeader + FIXSCROLL:this.singerHeader + Math.abs(newVal)
            //  if(newVal >= FIXSCROLL){
            //  ScrollY =this.singerHeader + FIXSCROLL
            //  }else{
            ScrollY = this.singerHeader + Math.abs(newVal)
            //}
            this.$refs.singerHeader.style.height=`${ ScrollY}px`
            this.$refs.singerHeader.style.transform = `scale(${scale})`
          }else{
            blur = Math.min(20, percent * 20)
            this.$refs.playBtn.style.display = 'none'
            if(Math.abs(newVal) >= this.singerHeader - FIXSCROLL){
              ScrollY = this.singerHeader - FIXSCROLL
              zIndex = 10
              this.$refs.singerHeader.style.height=`${ FIXSCROLL}px`
            }else{
              ScrollY = Math.abs(newVal)
              zIndex = 0
              this.$refs.singerHeader.style.height=`${this.singerHeader - Math.abs(newVal)}px`
            }
            //this.$refs.singerHeader.style.filter = `blur(${blur}px)`
            this.$refs.singerHeader.style.zIndex=zIndex
          }
        }
      },
      computed:{
        title(){
          const {songs} = this
          if(songs.length>0){
              //console.log(songs[0])
              return songs[0].singer
          }else{
              return ''
          }

        },
      },
      methods:{
        ...mapActions(['openPlaying','_getSongUrl']),
        ...mapMutations({
          _saveOrigin:'orderSongsList'
        }),
        playAudio(item,index){
          // 获取到歌曲列表及当前idx
          this.openPlaying({
            lists:item,
            index:index
          })
        },
        _scrollStart(e){
          this.scrollY = e.y
        },
        _random(item,index,mode){

          this.openPlaying({
            lists:item,
            index:index,
            mode:mode
          })
        },
        _getSingerDetail(){
          const id= this.$route.query.id
          getSingerDetail(id).then((res)=>{
            if(res.code ===0){
              let data = res.singer.data.songlist
              this._normalData(data)
            }
          })
        },
        _normalData(songLists){
          let singer =[]
          console.log(songLists);
          songLists.forEach((songList,i)=>{

            if(songList.mid && songList.album.id){
              singer.push(createSong(songList))
            }
          })
          this.songs = singer
        },
        back(){
          this.$router.back()
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"
.page
  position relative
  height:100%
  .back
    position fixed;
    top:10px;
    left:10px;
    z-index:100
    .icon-back
      color:$color-theme
      font-size:$font-size-medium-x
  .title
    width:80%
    position absolute
    top:0
    left:50%
    transform: translateX(-50%)
    padding-top:10px
    font-size:$font-size-medium-x
    color:$color-text
    z-index:100
    text-align:center
  .singerHeader
    height:200px;
    overflow: hidden;
    position relative
    z-index:0
    .ImgAuto
      width:100%;
    .filter
      position: absolute
      width:100%;
      height:100%;
      top:0
      left:0;
      z-index:11
      background: rgba(7, 17, 27, 0.4)
    .play-wrapper
      position: absolute
      bottom: 20px
      z-index: 50
      width: 100%
      .play
        box-sizing: border-box
        width: 135px
        padding: 7px 0
        margin: 0 auto
        text-align: center
        border: 1px solid $color-theme
        color: $color-theme
        border-radius: 100px
        font-size: 0
        .icon-play
          display: inline-block
          vertical-align: middle
          margin-right: 6px
          font-size: $font-size-medium-x
        .text
          display: inline-block
          vertical-align: middle
          font-size: $font-size-small
  .bg-layer
    position: relative
    height: 100%
    background: $color-background
  .bscroll
    position fixed
    top:0
    bottom:0
    /*overflow:hidden*/
    .content
      padding-top:10px

</style>
