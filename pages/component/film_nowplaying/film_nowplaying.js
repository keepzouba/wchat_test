const app = getApp()
const utils = require("../../../utils/util.js")
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定

  },
  data: {
    // 这里是一些组件内部数据
    nowplayingData: [],
    nowplayingpage: 1
  },
  methods: {
    // 这里是一个自定义方法
    getNowPlayingData: function () {
      wx.request({
        url: 'https://m.maizuo.com/v4/api/film/now-playing',
        data: {
          "__t": 1532430582077,
          "page": this.data.nowplayingpage,
          "count": 7
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          this.setData({
            nowplayingData: [...this.data.nowplayingData, ...res.data.data.films]
          })
        }.bind(this)
      })
    },
    getmorenowplaying() {
      this.setData({
        nowplayingpage: this.data.nowplayingpage + 1
      })
      this.getNowPlayingData()
    },
  },
  attached() {
    this.getNowPlayingData()
  },
  ready() {
    console.log("组件布局完成")
  }
})