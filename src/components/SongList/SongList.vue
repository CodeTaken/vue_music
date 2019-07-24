<template>
    <div class="songComponent">
      <div class="flex songContetn">
        <div class="songName">{{song.name}}</div>
        <div class="songDesc">{{song.singer}} &nbsp;&nbsp;&nbsp;&nbsp; {{song.album}}</div>
      </div>
    </div>
</template>

<script>
    export default {
      props:{
        song:{
          type:Object,
          default:{}
        }
      },
      name: "SongList"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"
  .songComponent
    padding:0 20px;
    .songContetn
      flex-direction column
      align-items flex-start
      font-size:$font-size-medium
      margin-left:20px
      padding:10px 0
      .songName
        color:$color-text
        padding-bottom:8px;
      .songDesc
        color:$color-dialog-background
</style>
