<template>
    <div ref="" class="wrapper">
      <slot></slot>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name: "BetterScroll",
      props:{
        probeType:{
          type:Number,
          default:1
        },
        click:{
          type:Boolean,
          default:true
        },
        data:{
          type:Array,
          default:null
        }
      },
      data(){
          return{}
      },
      mounted(){
        // 所有数据渲染完成之后 new BScroll('.wrapper'
        setTimeout(()=>{
          this._initBscroll()
        },2000)
      },
      methods:{
        _initBscroll(){
          console.log('jll');
          this.BSscroll = new BScroll('.wrapper',{
            probeType: this.probeType,
            click: this.click
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
