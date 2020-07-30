//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    product_list: []
  },
  onLoad: function () {

    const db = wx.cloud.database()
    const c =  db.collection("userList")
    c.get().then(res => {
      console.log(res)
    })

    wx.request({
      url: 'http://demo.itlike.com/web/xlmc/api/homeApi?',
      data: {
        itlike: '36126433836819788356'
      },
      method: 'get',
      success: (res) => {
        let list = res.data.data.list[7].product_list
        console.log("网络请求成功", list)
        this.setData({
          product_list: list
        })
      },
      fail: function (err) {
        console.log("网络请求失败", err)
      }
    })
  }
})
