/**
 * Created by qi.xu on 2019/7/23.
 */

export const singers = state =>state.singers
export const singerDetail = state =>state.singerDetail
export const playShow = state =>state.playShow
export const playStatus = state =>state.playStatus
export const orderSongsList = state =>state.orderSongsList
export const randomSongsList = state =>state.randomSongsList
export const playMode = state =>state.playMode
export const currentPlayIndex = state =>state.currentPlayIndex


// 计算属性
export const currentSong = (state)=>{
  return state.orderSongsList[state.currentPlayIndex] || {
    album: "新的心跳",
    duration: 245,
    id: 1196826,
    image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001fNHEf1SFEFN.jpg?max_age=2592000",
    mid: "004dFFPd4JNv8q",
    name: "来自天堂的魔鬼",
    singer: "G.E.M. 邓紫棋",
    url: "http://ws.stream.qqmusic.qq.com/004dFFPd4JNv8q.m4a?fromtag=46",
  }
}



