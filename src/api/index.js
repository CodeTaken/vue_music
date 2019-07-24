import jsonp from '../assets/js/jsonp'
import {commonParam,options} from '../assets/js/config'
import axios from 'axios'
import ajax from './ajax'
const BASE_URL = '/api'

export function getBanner () {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  let data = Object.assign({},commonParam,{
   _: 1563557652115,
  uin: 1061768744,
  platform: 'h5',
  needNewCode: 1,
  })
  return jsonp(url,data,options)
}
export function getDiscues (){
  let url ='/api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  const data = {
    picmid:1,
    rnd:0.40551870635379217,
    loginUin:1061768744,
    hostUin:0,
    format:'json',
    nCharset: 'utf8',
    outCharset: 'utf-8',
    g_tk: 509215669,
    notice:0,
    platform: 'yqq.json',
    needNewCode: 0,
    categoryId:10000000,
    sortId:5,
    sin:0,
    ein:19
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}


// singer
export function getSinger(){
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?-=getUCGI05086107326913858&g_tk=387183959&loginUin=930407440&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D'
  return jsonp(url, {})
}

// 抓取歌手详情接口
export function getSingerDetail(singerId){
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  let jsonData = {"comm":{"ct":24,"cv":0},"singer":{"method":"get_singer_detail_info","param":{"sort":5,"singermid":singerId,"sin":0,"num":100},"module":"music.web_singer_info_svr"}}
  let data = Object.assign({},commonParam,{
    //'-':'getUCGI7841720130500427',
    g_tk: 387183959,
    loginUin: 930407440,
    hostUin: 0,
    notice: 0,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    platform: 'yqq.json',
    needNewCode: 0,
    data:JSON.stringify(jsonData)
  })
  return jsonp(url,data)
}

