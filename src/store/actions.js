/**
 * Created by qi.xu on 2019/7/23.
 */
import {
  RECEIVE_SINGER
} from './mutations-types'

import {
  getSinger
} from '../api/index'

export default {

  //获取歌手名单
  async getSingers({commit}){
    const result =await getSinger();
    if(result.code ===0){
      const singers = result.singerList.data.singerlist
      commit(RECEIVE_SINGER,singers)
    }
  }

}
