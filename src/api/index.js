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

