<template>
    <div class="flex Tab">
        <div class="tab-item" v-for="(tab,index) in tabs">
          <router-link tag="div" :to="tab.path">{{tab.name}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
      name: "Tab",
      data () {
          return {
              tabs:[
                  {
                    path:'/home',
                    name:'推荐'
                  },
                  {
                    path:'/singer',
                    name:'歌手'
                  },
                  {
                    path:'/rank',
                    name:'排行'
                  },
                  {
                    path:'/search',
                    name:'搜索'
                  }
               ]
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"
  .Tab
    margin:10px 0;
    .tab-item
        flex 1;
        text-align center
        .router-link-active{
          display inline-block;
          vertical-align middle
          color:$color-theme
          padding-bottom 4px
          border-bottom: 1px solid $color-theme
        }
</style>
