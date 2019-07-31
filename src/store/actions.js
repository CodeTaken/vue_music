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
    let list,idx

    commit(PLAYSHOW,true)
    commit(PLAYSTATUS,true)
    commit(ORDERSONGSLIST,lists)
    if(palyMode===0){
      list = lists
      idx = index
    }else if(palyMode===1){
      // 随机列表
       list = resetRandomList(lists)
      idx = list.findIndex((item)=>{
        return item.id === lists[index].id
      })
    }else{
       list =[].push(lists[index])
      idx = 0
    }
    commit(PLAYINGLISTS,list)
    //state.playMode===0?commit(ORDERSONGSLIST,lists):(state.playMode===1?commit(RANDOMSONGSLIST,lists):commit(RANDOMSONGSLIST,lists))
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
  // 切换播放模式 mode
  changePlayMode({commit,state},mode){
    //切换当前的播放模式、根据源播放列表生成对应的播放列表、获取正在播放的song,重新设置 index
    let Mode = state.playMode
    let originArr = state.orderSongsList
    let Song = state.playingList[state.currentPlayIndex]
    let list=[],idx=-1
    Mode = Mode<2?Mode+1:0
    // 改变模式
    commit(PLAYMODE,Mode)
    // 改变播放列表
    if(Mode===0){
      list = originArr
    }else if(Mode===1){
      // 随机列表
       list = resetRandomList(originArr)
    }else{
       list.push(Song)
    }
    commit(PLAYINGLISTS,list)
    // 设置当前的音乐不变
    list.some((item,i)=>{
      if(item.id===Song.id){   // 随机生成的可能当前歌曲不在其中
        console.log(item.mid + '<><>'+ Song.mid)
        idx = i
        return i
      }
    })
    console.log(list);
    console.log(idx);
    commit(CURRENTPLAYINDEX,idx)

  }


}
