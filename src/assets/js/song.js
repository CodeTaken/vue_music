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
    image :`https://y.gtimg.cn/music/photo_new/T002R300x300M000${list.album.mid}.jpg?max_age=2592000`,
    url :`http://111.202.85.153/amobile.music.tc.qq.com/C400${list.mid}.m4a?guid=6170070579&vkey=E0D6F436DF75F58EEC58699C3264E22B3EFDDEBB6D38DF7B45983D836A10E50ED72ADF441A74D8BBC5BB657D4A2039907E8E2388E60EEEF1&uin=1040&fromtag=66`
  })
}
