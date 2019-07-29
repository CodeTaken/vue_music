/**
 * Created by qi.xu on 2019/7/23.
 */

export const singers = state =>state.singers
export const singerDetail = state =>state.singerDetail
export const playShow = state =>state.playShow
export const playFullShow = state =>state.playFullShow
export const playStatus = state =>state.playStatus
export const playingList = state =>state.playingList
export const orderSongsList = state =>state.orderSongsList
export const randomSongsList = state =>state.randomSongsList
export const playMode = state =>state.playMode
export const currentPlayIndex = state =>state.currentPlayIndex


// 计算属性
export const currentSong = (state)=>{
  return state.orderSongsList[state.currentPlayIndex] || {}
}



