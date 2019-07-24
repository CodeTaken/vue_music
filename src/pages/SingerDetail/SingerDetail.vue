<template>
    <div class="page">
      SingerDetail
      <div style="height:200px;"></div>
      <!--<BScroll class="bscroll">-->
        <!--<div class="content">-->
          <!--<p style="background:red;height:200px;"></p>-->
          <!--<p style="background:yellow;height:200px;"></p>-->
          <!--<p style="background:pink;height:200px;"></p>-->
          <!--<p style="background:darkcyan;height:200px;"></p>-->
          <!--<p style="background:red;height:200px;"></p>-->
          <!--<p style="background:yellow;height:200px;"></p>-->
        <!--</div>-->
      <!--</BScroll>-->
    </div>
</template>

<script>
  import BScroll  from '../../components/BetterScroll/BetterScroll.vue'
    export default {
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  .bscroll
    height:100%
    overflow:hidden

</style>
