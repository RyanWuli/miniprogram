// pages/databaseT/databaseT.js
Page({

  _handlerSubmit: function (evt) {
    console.log(evt)
    let id = evt.detail.target.id
     // 1.获取表单数据账号和密码
     let act = evt.detail.value.act
     let pwd = evt.detail.value.pwd
     // 2.保存账号密码到数据库
     // 2.1 获取数据库引用
     const db = wx.cloud.database()
     // 2.2 获取集合引用
     const actCollection = db.collection("actCollection")
    if (id === 'login') {
      // 2.3 从数据库查询数据
      actCollection.where({
        account: act,
        password: pwd
      }).get().then(res => {
        console.log('查询成功', res)
      }).catch(err => {
        console.log('查询失败', err)
      })
    } else {
      // 2.3 往集合内部添加数据
      actCollection.add({
        data: {
          account: act,
          password: pwd
        }
      })
    }


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