/**
 * Created by qi.xu on 2019/7/23.
 */
import {resetRandomList} from '../assets/js/song'
// 二个值的问题。
import {
  RECEIVE_SINGER,
  RECEIVE_SINGERDETAIL,
  PLAYSHOW,
  PLAYSTATUS,
  PLAYMODE,
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
    // 更新播放列表  更新currentIndex 更新播放状态  播放器显示
    commit(PLAYSTATUS,true)
    commit(PLAYSHOW,true)
    let list,idx
    if(state.playMode===0){
      list = lists
      idx = index
    }else if(state.playMode===1){
      list = resetRandomList(lists)
      console.log(list);
      idx = list.findIndex((item)=>{
         return item.id === lists[index].id
      })
    }else{
      list = lists[index]
      idx = 0
    }
    commit(PLAYINGLISTS,list)
    commit(CURRENTPLAYINDEX,idx)

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
  // 切换 mode
  changePlayMode({commit,state},list){
    let Mode = state.playMode
    Mode = Mode<2?Mode+1:0
    // 改变模式
    commit(PLAYMODE,Mode)
    // 改变播放列表
    commit(PLAYINGLISTS,list)
    // 设置当前的音乐不变
    state.PLAYINGLISTS.findIndex((item,i)=>{

    })

  }


}
