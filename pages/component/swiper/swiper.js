const app = getApp()
const utils = require("../../../utils/util.js")
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定

  },
  data: {
    // 这里是一些组件内部数据
    imgUrls: [],
  },
  methods: {
    // 这里是一个自定义方法
    getlbtDate() {
      //请求轮播图数据
      wx.request({
        url: 'https://m.maizuo.com/v4/api/billboard/home', //仅为示例，并非真实的接口地址
        data: {
          "__t": 1532430582070
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          this.setData({
            imgUrls: [...res.data.data.billboards]
          })
        }.bind(this)
      })
    },
  },
  attached() {
    this.getlbtDate()
  },
})