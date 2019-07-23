<template>
    <div ref="wrapper" class="wrapper" :data="data" :probeType="probeType">
      <div class="content">
        <slot></slot>
      </div>

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
      watch:{
        data(value){
          this.$nextTick(()=>{
            this.refresh()
          })
        }
      },
      mounted(){
        // 所有数据渲染完成之后 new BScroll('.wrapper'
        this._initBscroll()
      },
      computed:{

      },
      methods:{
        _initBscroll(){
          this.BSscroll = new BScroll(this.$refs.wrapper,{
            probeType: this.probeType,
            click: this.click
          })
          // 监听 滚动的
          if(this.BSscroll){
            let that = this;
            this.BSscroll.on('scroll',(e)=>{
              that.$emit('scrollStart',e)
            })
            this.BSscroll.on('scrollEnd', ({x, y}) => {
              this.scrollY = Math.abs(y)
              //console.log('scrollEnd',this.scrollY)
              that.$emit('scrollEnd',this.scrollY)
            })
          }
        },
        refresh() {
          this.BSscroll && this.BSscroll.refresh()
        },
      },


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
