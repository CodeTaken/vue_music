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
    url :`http://111.202.98.160/amobile.music.tc.qq.com/C400004dFFPd4JNv8q.m4a?guid=6170070579&vkey=FA0535E21A7BDEE914F98BFBF9E73D42F30E16F3A6CEEBA5D6F1EE934872B61ECC9654D0E1B37925342349BDD7A5737381D67B986B9A3D29&uin=1040&fromtag=66&cid=${list.mid}`
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

