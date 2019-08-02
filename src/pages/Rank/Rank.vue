<template>
    <div class="page">
      <BScroll :data="rankLists" class="bscroll">
        <div>
          <div class="flex rankList" v-for="(rankList,index) in rankLists" :key="index">
            <div class="flex imgContent"><img class="img_auto" :src=" rankList.headPicUrl" alt=""></div>
            <div class="rankDes">
              <h3 class="">{{rankList.title}}</h3>
              <p v-for="(song,idx) in rankList.song" :key="idx" class="singModule">
                <span class="order">{{idx+1}}</span>{{song.title}}<span class="singerName"> - {{song.singerName}}</span>
              </p>
            </div>
          </div>
        </div>
      </BScroll>
    </div>
</template>

<script>
  import {getRankingList} from '../../api/index'
  import  BScroll from '../../components/BetterScroll/BetterScroll.vue'
    export default {
      data(){
          return{
            rankLists:[]
          }
      },
      components:{
        BScroll
      },
      name: "Rank",
      created(){
        getRankingList().then((res)=>{
          let arr = []
          res.req_0.data.group.forEach((item)=>{
            arr.push(...item.toplist)
          })
          this.rankLists = arr
        })
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/variable.styl";
.page
  padding:20px
  position: fixed;
  top: 82px;
  width: 100%;
  bottom: 0;
  .bscroll
    position: absolute;
    top: 0;
    /*width: 100%;*/
    bottom: 0;
    overflow: hidden;
    .rankList
      background:$color-highlight-background
      height:100px;
      overflow: hidden;
      margin-bottom:20px
      .imgContent
        width:100px
      .rankDes
        flex:1
        padding:0 10px
        color:$color-text-l
        line-height:1.7
        font-size:$font-size-medium;
        max-width:215px;
        .singModule
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .order
            margin-right:4px;
</style>
