// pages/11-customWidgetDemo/11-customWidgetDemo.js
Page({

  // segmentBar 部分
  // _handlerSelectChange: function (evt) {
  //   console.log(evt)
  // },

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        title: '热门榜',
        subTitle: '本周最佳'
      },{
        title: '新晋榜',
        subTitle: '本周上新'
      },{
        title: '潜力榜',
        subTitle: '本周最快'
      },{
        title: '收藏榜',
        subTitle: '本周最多'
      }
    ],
    details: [
      '爱在西元前', '搁浅', '青花瓷', '告白气球'
    ]
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