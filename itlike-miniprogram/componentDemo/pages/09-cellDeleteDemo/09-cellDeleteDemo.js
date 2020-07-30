// pages/09-cellDeleteDemo/09-cellDeleteDemo.js

let beginX;

Page({

  _handlerStart: function (evt) {
    console.log(evt)
    console.log(evt.changedTouches[0].pageX)
    beginX = evt.changedTouches[0].pageX
  },

  _handlerEnd: function (evt) {
    console.log(evt)
    console.log(evt.changedTouches[0].pageX)
    let endX = evt.changedTouches[0].pageX
    let cha = endX - beginX
    console.log(endX - beginX)
    if (cha < -20) {
      this.setData({
        isOpen: true
      })
    } else if (cha > 20) {
      this.setData({
        isOpen: false
      })
    } else {
      this.setData({
        isOpen: this.data.isOpen
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    isOpen: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})