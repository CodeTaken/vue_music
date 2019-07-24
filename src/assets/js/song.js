export default class Song{
  constructor({id,mid,singer,name,album,duration,image,url}){
      this.id = id,
      this.mid = mid,
      this.singer = singer,
      this.name = name,
      this.album = album,
      this.duration = duration,
      this.image = image,
      this.url = url
  }
}


export function createSong(list){
  return new Song({
     id:list.album.id,
     mid:list.mid,
     singer:list.singer[0].name,
    name:list.name,
    album:list.album.title,
    duration :list.interval,
    image :`https://y.gtimg.cn/music/photo_new/T002R300x300M000${list.singer[0].mid}.jpg?max_age=2592000`,
    url :`http://ws.stream.qqmusic.qq.com/${list.mid}.m4a?fromtag=46`
  })
}
