// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag_type:"nowplaying",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tag_toggle_now(e){
    if(e.target.id==="nowplaying"){
      this.setData({
        tag_type:"nowplaying"
      })
    }
  },
  tag_toggle_soon(e){
    if (e.target.id === "comingsoon") {
      this.setData({
        tag_type: "comingsoon"
      })
    }
  }
})