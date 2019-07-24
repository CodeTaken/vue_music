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
  }

}
