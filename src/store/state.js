/**
 * Created by qi.xu on 2019/7/23.
 */
export default {
  singers:[],              //歌手名单
  singerDetail:{},         // 歌手详情
  playShow:false,         // 播放器是否显示
  playFullShow:true,       // 播放器的状态
  playStatus:false,       // 播放器的状态
  playingList:[],          // 播放列表
  orderSongsList:[],       // 原始返回列表
  randomSongsList:[],      // 随机播放器列表
  playMode:0,              // 0表示顺序播放 1表示随机 2表示单曲循环
  currentPlayIndex:-1,     // 当前播放的下标
}
