<template>
    <div class="singerPage">
        <BetterScroll class="bscroll" :data="singers" :probeType="3" @scrollStart="_scrollStart" @scrollEnd="_scrollEnd">
          <ul class="singerContent">
            <li v-for="(singer,index) in singers" :key="index" ref="listGroup">
                <h3 class="title">{{singer.title?singer.title:'其它'}}</h3>
                <ul class="singers">
                  <router-link tag="li" :to="{ path:'/singerDetail',query:{id:list.id} }" v-for="(list,i) in singer.lists" :key="i" class="flex">
                    <div class="flex singerImg"><img class="img_auto" v-lazy="list.img" alt=""></div>
                    <p class="singerName">{{list.name}}</p>
                  </router-link>
                </ul>
            </li>
          </ul>
          <div class="fixTitle" v-if="fixedTitle" ref="fixedTitle">
            <h3 class="title">{{fixedTitle}}</h3>
          </div>
        </BetterScroll>
    </div>
</template>

<script>
  const TITLE_HEIGHT=32;
  import BetterScroll from '../../components/BetterScroll/BetterScroll'
  import {mapState} from 'vuex'
  import { getSingerDetail } from  '../../api/index'
    export default {
      name: "Singer",
      components:{
        BetterScroll
      },
      data (){
        return {
          Height:[],  // 每个列表的高度
          currentIndex:0,  // 当前是第几个
          diff:0,
        }
      },
      watch:{
        singers(){
          this.$nextTick(()=>{
              setTimeout(()=>{
                this._initHeight()
              },20)

          })
          // setTimeout(() => {
          //   this._initHeight()
          // }, 20)

        },
        diff(newValue){
           let topFix = Math.ceil(newValue)
           let translate = (topFix < TITLE_HEIGHT && topFix > 0)?newValue - TITLE_HEIGHT:0
           this.$refs.fixedTitle.style.transform = `translate3d(0,${translate}px,0)`
        },
      },
      created(){
        this.$store.dispatch('getSingers')
        this._getSingerDetail();
      },
      mounted(){
      },
      computed:{
        ...mapState(['singers']),
        fixedTitle(){
          const {currentIndex} = this
          return this.singers[currentIndex]? this.singers[currentIndex].title:''
        }
      },
      methods:{
          _getSingerDetail(){
              let id = '001fNHEf1SFEFN'
              getSingerDetail(id).then((res)=>{
                console.log(res);
              })
          },
        _scrollStart(e){
          let {Height} = this
          let scrollY = Math.abs(e.y)
          Height.some((value,index)=>{
              if(value <= scrollY && scrollY< Height[index +1]) {
                  this.currentIndex = index
                  this.diff = Height[index +1] - scrollY
                  return index
              }
          })
        },
        _initHeight(){
          let height=[];
          let top=0
          height.push(top)
          this.$refs.listGroup.forEach((item,index)=>{
            top+=item.clientHeight
            height.push(top);
          })
          //console.log(height);
          this.Height = height
        },
        _scrollEnd(e){
          //console.log(e);
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/variable.styl"
.singerPage
  position:fixed
  top:82px
  width:100%
  bottom:0
  .bscroll
    height:100%
    overflow: hidden
    position:relative
    .fixTitle
      position:absolute
      width:100%
      top:0px;
      left:0
      .title
        background:$color-dialog-background
        padding:8px 20px
        font-size:$font-size-medium-x
        color:$color-text-ll
    .singerContent
      .title
        background:$color-text-d
        padding:8px 20px;
        font-size:$font-size-medium-x;
        color:$color-text-ll
      .singers
        padding:10px 20px;
        .flex
          margin:5px 0;
          .singerImg
            width:50px
            border-radius:50%;
            overflow: hidden;
          .singerName
            font-size:$font-size-medium;
            color:$color-dialog-background
            flex:1
            margin-left:20px
</style>
