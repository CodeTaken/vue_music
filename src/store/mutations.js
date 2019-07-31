/**
 * Created by qi.xu on 2019/7/23.
 */
import {
  RECEIVE_SINGER,
  RECEIVE_SINGERDETAIL,
  PLAYSHOW,
  PLAYSTATUS,
  PLAYFULLSHOW,
  PLAYINGLISTS,
  ORDERSONGSLIST,
  RANDOMSONGSLIST,
  PLAYMODE,
  CURRENTPLAYINDEX
} from './mutations-types'

export default {
  [RECEIVE_SINGER](state,singers){
    // 获取到数据，操作数据，存储到state中
    let singersData = singers
    let Data=[]
    let status = false;
    singersData.forEach((item,i)=>{
        for(let idx=0; idx<Data.length;idx++){
           status = false
          if(Data[idx].title === item.country){
            status=true
            Data[idx].lists.push({
              name: item.singer_name,
              id: item.singer_mid,
              img:item.singer_pic
            })
           break;
          }
        }
        if(!status){
        Data.push({
          title:item.country,
          lists:[]
        })
        Data[Data.length-1].lists.push({
          name: item.singer_name,
          id: item.singer_mid,
          img:item.singer_pic
        })
      }
    })
    //console.log(Data);
    state.singers = Data
  },

  // 歌手详情
  [RECEIVE_SINGERDETAIL](state,singerDetail){
    console.log(singerDetail);
  },

  // 播放器的显示
  [PLAYSHOW](state,status){
    state.playShow = status
  },
  // 播放器的全屏显示状态
  [PLAYFULLSHOW](state,status){
    state.playFullShow = status
  },
  // 播放器的状态
  [PLAYSTATUS](state,status){
    state.playStatus = status
  },
  // 添加播放列表
  [PLAYINGLISTS](state,lists){
    state.playingList = lists
  },
  // 顺序播放歌单
  [ORDERSONGSLIST](state,lists){
    state.orderSongsList = lists
  },
  // 随机播放歌单
  [RANDOMSONGSLIST](state,lists){
    state.randomSongsList = lists
  },
  // 播放模式
  [PLAYMODE](state,mode){
    state.playMode = mode
  },
  // 播放当前id
  [CURRENTPLAYINDEX](state,index){
    state.currentPlayIndex = index
  },
}
