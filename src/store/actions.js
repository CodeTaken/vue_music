/**
 * Created by qi.xu on 2019/7/23.
 */
// 二个值的问题。
import {} from '../assets/js/song'
import {
  RECEIVE_SINGER,
  RECEIVE_SINGERDETAIL,
  PLAYSHOW,
  PLAYSTATUS,
  PLAYINGLISTS,
  ORDERSONGSLIST,
  RANDOMSONGSLIST,
  CURRENTPLAYINDEX,
} from './mutations-types'

import {
  getSinger,
  getSingerDetail,
  getSongUrl,
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
  openPlaying({commit,state},{lists,index}){
    // 打开播放窗口、设置播放、获取播放列表元数据、根据播放模式设置播放列表和当前song
    let palyMode = state.playMode
    let song =[].push(lists[index])
    commit(PLAYSHOW,true)
    commit(PLAYSTATUS,true)
    commit(ORDERSONGSLIST,lists)
    if(palyMode===0){
      commit(PLAYINGLISTS,lists)
    }else if(palyMode===1){
      // 随机列表

    }else{
      commit(PLAYINGLISTS,song)
    }

    //state.playMode===0?commit(ORDERSONGSLIST,lists):(state.playMode===1?commit(RANDOMSONGSLIST,lists):commit(RANDOMSONGSLIST,lists))
    commit(CURRENTPLAYINDEX,index)
  },
  // 切换上一首、下一首
  changePlayMusic({commit,state},type='next'){
    let index = state.currentPlayIndex
    index = state.playMode ===2?0:(type=='next'?(index < state.playingList.length?index+1:0):(index <= 0?state.playingList.length -1:index-1))
    commit(CURRENTPLAYINDEX,index)
  },
  async _getSongUrl({commit},songid){
    const result = await getSongUrl(songid)
    console.log('歌曲详情');
    console.log(result);

    if(result.code ===0){
      let vkey = result.req.data.vkey
      let url =`http://111.202.85.154/amobile.music.tc.qq.com/C4000${songid}.m4a?guid=6170070579&vkey=${vkey}&uin=1040&fromtag=66`
      console.log(url);
    }
  },



}
