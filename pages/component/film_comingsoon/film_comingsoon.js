const app = getApp()
const utils = require("../../../utils/util.js")
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定

  },
  data: {
    // 这里是一些组件内部数据
    comingsoonData: [],
    comingsoonpage: 1
  },
  methods: {
    // 这里是一个自定义方法
    getComingSoonData: function () {
      wx.request({
        url: 'https://m.maizuo.com/v4/api/film/coming-soon',
        data: {
          "__t": 1532430582087,
          "page": this.data.comingsoonpage,
          "count": 7
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          res.data.data.films.map(function (item) {
            item.premiereAt = utils.changeTime_mdw(new Date(item.premiereAt))
          })
          this.setData({
            comingsoonData: [...this.data.comingsoonData, ...res.data.data.films]
          })
        }.bind(this)
      })
    },
    getmorecomingsoon() {
      this.setData({
        comingsoonpage: this.data.comingsoonpage + 1
      })
      this.getComingSoonData()
    }
  },
  attached() {
    this.getComingSoonData()
  },
  ready() {
    console.log("组件布局完成")
  }
})