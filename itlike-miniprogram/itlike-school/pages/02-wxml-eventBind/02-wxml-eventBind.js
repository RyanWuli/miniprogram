// pages/02-wxml-eventBind/02-wxml-eventBind.js
Page({

  _handlerTap: function (evt) {
    console.log("触摸事件！", evt)
  },
  _handlerThree: function (evt) {
    console.log("处理第三个组件！", evt)
  },
  _handlerTwo: function (evt) {
    console.log("处理第二个组件！", evt)
  },
  _handlerOne: function (evt) {
    console.log("处理第一个组件！", evt)
  },
  _handlerLongPress: function () {
    console.log("长按事件，停留350ms 才会触发")
  },
  _handlerTS: function () {
    console.log("触摸开始事件")
  },
  _handlerTM: function () {
    console.log("触摸移动事件")
  },
  _handlerTE: function () {
    console.log("触摸结束事件")
  },
  _handlerTC: function () {
    console.log("触摸取消事件")
  },

  /**
   * 页面的初始数据
   */
  data: {

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
    // setTimeout(() => {
    //   wx.showModal({
    //     cancelColor: 'red',
    //     title: '弹框打断触摸取消测试',
    //     content: '这里真的弹了一个框！'
    //   })
    // }, 3000);
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