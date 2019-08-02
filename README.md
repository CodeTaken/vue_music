# vue_music

> vue project

## Build Setup
需要完善的
  1、歌手页右侧的联动
  2、bug singer 页面需要延迟计算高度，不然算的高度不对
  3、歌手页滑动顶部时固定顶部要消失
  4、歌手详情页 vuex 请求能成功，返回数据为空
  5、随机播放可能找不到当前播放的歌曲 导致随机播放找不到歌曲
  6、拖动进度条快进或倒退
  7、小播放器遮挡页面
  8、添加下拉刷新

暂停 icon-pause icon-pause-mini

注意的点：
// scroll 的渲染与DOM数据
// singers 页面有时候不请求 原因=>后台返回空数据
// 计算每个 数组的距离数组 KG     获取当前的数组，
// JS 执行动画是怎么兼容处理
// vue 动画的实现
播放页背景的设置
mapState mapGetters
mapActions mapMutations  methods
时间戳转化为时分秒
圆形进度条的制作

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
