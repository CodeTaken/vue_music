/**
 * Created by qi.xu on 2019/7/23.
 */
import {
  RECEIVE_SINGER,
  RECEIVE_SINGERDETAIL
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
      console.log(result);
      const singerDetail = result.singer.data
      //commit(RECEIVE_SINGERDETAIL,singerDetail)
    }
  }

}
