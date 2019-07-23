<template>
    <div class="singerPage" style="height:100%;">
        <BetterScroll class="bscroll" :data="singers" :probeType="3" @scrollStart="_scrollStart" @scrollEnd="_scrollEnd">
          <ul class="singerContent">
            <li v-for="(singer,index) in singers" :key="index" ref="listGroup">
                <h3 class="title">{{singer.title?singer.title:'其它'}}</h3>
                <ul class="singers">
                  <router-link tag="li" to="/rank" v-for="(list,i) in singer.lists" :key="i" class="flex">
                    <div class="flex singerImg"><img class="img_auto" v-lazy="list.img" alt=""></div>
                    <p class="singerName">{{list.name}}</p>
                  </router-link>
                </ul>
            </li>
          </ul>
        </BetterScroll>
    </div>
</template>

<script>
  import BetterScroll from '../../components/BetterScroll/BetterScroll'
  import {mapState} from 'vuex'
    export default {
      name: "Singer",
      components:{
        BetterScroll
      },
      data (){
        return {
        }
      },
      watch:{
        singers(){
          this.$nextTick(()=>{
            this._initHeight()
          })
          // setTimeout(() => {
          //   this._initHeight()
          // }, 20)

        }
      },
      created(){
        this.$store.dispatch('getSingers')
      },
      mounted(){

      },
      computed:{
        ...mapState(['singers'])
      },
      methods:{
        _scrollStart(e){
          console.log(e);
        },
        _initHeight(){
          console.log('e');
          const list = this.$refs.listGroup
          console.log(list);
        },
        _scrollEnd(e){
          //console.log(e);
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/variable.styl"
.bscroll
  height:calc(100% - 80px)
  overflow: hidden
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
