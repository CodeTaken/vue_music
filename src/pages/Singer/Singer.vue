<template>
    <div>Singer</div>
</template>

<script>
  import { getSinger } from '../../api/index'
  import {mapState} from 'vuex'
    export default {
      name: "Singer",
      data (){
        return {

        }
      },
      created(){
        this._getSinger();
      },
      methods:{
           _getSinger(){
               this.$store.dispatch('getSingers')
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
