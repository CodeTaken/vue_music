/**
 * Created by qi.xu on 2019/7/23.
 */
import {
  RECEIVE_SINGER,
} from './mutations-types'

export default {
  [RECEIVE_SINGER](state,singers){
    // 获取到数据，操作数据，存储到state中
    let singersData = singers
    console.log(singersData);
    state.singers = singersData
  }

}
