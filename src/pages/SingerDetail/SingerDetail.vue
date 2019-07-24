<template>
    <div class="page">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>
      <div class="singerHeader" style="height:200px;" ref="singerHeader">
         <img class="ImgAuto" :src="bgImage" alt="" ref="">
          <div class="title"></div>
          <div class=""></div>
      </div>
      <BetterScroll class="bscroll" ref="bscroll" :probeType="3" @scrollStart="_scrollStart">
        <div class="content">
            <div v-for="(song,index) in songs" :key="index">
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

  const FIXSCROLL =40;
    export default {
      data () {
          return {
            songs:[],
            bgImage:`http://y.gtimg.cn/music/photo_new/T001R300x300M000${this.$route.query.id}.jpg?max_age=2592000`,
            title:'',
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
        this.singerHeader = this.$refs.singerHeader.offsetHeight
        this.maxUpHeight = this.singerHeader + FIXSCROLL
      },
      watch:{
        singerHeader(){
          //console.log(this.singerHeader)
          this.$refs.bscroll.$el.style.top = `${this.singerHeader}px`
        },
        scrollY(newVal){
          // 监听 y 的变化，如果是正数，放大图片  否则缩小图片高度
          let scale = 1
          let zIndex = 0
          let blur = 0
          const percent = Math.abs(newVal / this.singerHeader)
          if(newVal > 0 ){
            scale = 1 + percent
          }else{

          }
          //console.log(scrollY);
          if(newVal >FIXSCROLL){

          }else{
            //this.singerHeader = scrollY
          }


          this.$refs.singerHeader.style.transform = `scale(${scale})`

        }
      },
      computed:{

      },
      methods:{
        _scrollStart(e){
          this.scrollY = e.y
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
  .back
    position fixed;
    top:10px;
    left:10px;
    .icon-back
      color:$color-theme
      font-size:$font-size-medium-x
  .singerHeader
    height:250px;
    overflow: hidden;
    .ImgAuto
      width:100%;
  .bscroll
    position fixed
    top:0
    bottom:0
    overflow:hidden

</style>
