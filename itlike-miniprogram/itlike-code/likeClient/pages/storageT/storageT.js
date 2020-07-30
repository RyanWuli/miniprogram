// pages/storageT/storageT.js
Page({

  _handlerChoose: function (evt) {
    console.log(evt)
    // 选择图片对话框
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        let path = res.tempFilePaths[0]
        // 云储存-上传文件
        wx.cloud.uploadFile({
          cloudPath: 'fish2.png',
          filePath: path,
          success: (res) => {
            console.log(res)
            let newPath = res.fileID
            this.setData({
              imgPath: newPath
            })
          },
          fail: (err) => {
            console.log(err)
          }
        })
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: 'cloud://ryan-wxai3.7279-ryan-wxai3-1301116979/QQ截图20200729102512.png'
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