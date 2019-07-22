<template>
    <div class="flex Header">
      <!--<div class="left">left</div>-->
      <div class="flex center">
          <div class="logo"></div>
          <div>My music</div>
      </div>
      <!--<div class="right">right</div>-->
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
.Header
  height:40px
  padding: 0 20px;
  .logo
    width:28px;
    height:30px
    margin-right:10px;
    bg-image('images/logo')
    background-size 100%

</style>
