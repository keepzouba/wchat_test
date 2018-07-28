// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    //https://m.maizuo.com/v4/api/film/4266?__t=1532521120167
    wx.request({
      url: 'https://m.maizuo.com/v4/api/film/' + 4266, //仅为示例，并非真实的接口地址
      data: {
        "__t":1532521120167
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
    
        this.setData({
          detailsData: JSON.parse(JSON.stringify(res.data.data.film))
        })
      }.bind(this)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
})