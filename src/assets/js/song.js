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
    url :`http://111.202.85.154/amobile.music.tc.qq.com/C400004dFFPd4JNv8q.m4a?guid=6170070579&vkey=C5BC1F64789702300D97475A3EFF688D2A9ADDAE7B51089B03BA03587232860FEE4454813F2EE647BF294962AF69425F291238129BD33B83&uin=1040&fromtag=66&cid=${list.mid}`
  })
}


function randowIndex(min,max){
  return Math.floor(Math.random()*(max-min+1) + min)
}

export function resetRandomList(arr){
  let _arr = arr.slice()
  let len = _arr.length
  for(var i=0;i<len;i++){
    let j = randowIndex(0,len-1)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[t] = t
  }
   return _arr
}

