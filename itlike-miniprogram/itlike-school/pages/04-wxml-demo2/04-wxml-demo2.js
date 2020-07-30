// pages/04-wxml-demo2/04-wxml-demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  _handlerTap: function (evt) {
    // console.log("点击了课程条目，对应的 id 是：" + evt.currentTarget.id + evt.currentTarget.dataset.title)
    console.log("点击了课程条目，id：", evt.target.id, evt.target.dataset.title)
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