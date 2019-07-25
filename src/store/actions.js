/**
 * Created by qi.xu on 2019/7/23.
 */
// 二个值的问题。
import {
  RECEIVE_SINGER,
  RECEIVE_SINGERDETAIL,
  PLAYSHOW,
  PLAYSTATUS,
  ORDERSONGSLIST,
  CURRENTPLAYINDEX,
} from './mutations-types'

import {
  getSinger,
  getSingerDetail
} from '../api/index'

export default {

  //获取歌手名单
  async getSingers({commit}){
    const result =await getSinger();
    if(result.code ===0){
      const singers = result.singerList.data.singerlist
      //console.log(singers);
      commit(RECEIVE_SINGER,singers)
    }
  },
  // 获取歌手详情名单
  async receoveSingerDetail(id){
    const result =await getSingerDetail(id)
    if(result.code ===0){
      //console.log(result);
      const singerDetail = result.singer.data
      //commit(RECEIVE_SINGERDETAIL,singerDetail)
    }
  },
  // 开启播放模式
  openPlaying({commit},{lists,index}){
    // 更新播放列表  更新currentIndex 更新播放状态  播放器显示
    commit(PLAYSHOW,true)
    //commit(PLAYSTATUS,true)
    commit(ORDERSONGSLIST,lists)
    commit(CURRENTPLAYINDEX,index)
  },

}
