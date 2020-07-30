// pages/06-demo/06-demo.js
Page({

  _handlerAuto: function(evt) {
    console.log(evt)
    if (evt.detail.value.length > 0) { // 选择了自动登录，则自动选择记住密码
      this.setData({
        isRemember: true
      })
    }
  },

  _handlerRemember: function (evt) {
    console.log(evt)
    if (evt.detail.value.length === 0) { // 取消记住密码，则取消自动登录
      // 取消自动登录
      this.setData({
        isAuto: false
      })
    }
  },

  _handlerPasswordInput: function (evt) {
    let passwordV = evt.detail.value
    console.log(passwordV)
    this.setData({
      passwordV: passwordV,
      canLogin: passwordV.length > 0 && this.data.isGood
    })
  },

  _handlerAccountInput: function (evt) {
    // console.log(evt)
    // console.log(evt.detail.value)
    let accountV = evt.detail.value
    this.setData({
      isGood: evt.detail.value.length >= 3,
      accountV: evt.detail.value,
      canLogin: accountV.length >= 3 && this.data.passwordV.length > 0
    })
  },

  _handlerSubmit: function (evt) {
    console.log(evt)
    let account = evt.detail.value.accountV
    let password = evt.detail.value.passwordV
    if (account === 'Ryan' && password === '123456') {
      wx.redirectTo({
        url: '/pages/11-customWidgetDemo/11-customWidgetDemo?name=chaw&age=28',
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    isGood: false,
    canLogin: false,
    accountV: '',
    passwordV: '',
    isRemember: false,
    isAuto: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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