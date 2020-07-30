// pages/01-wxml-dataBind/01-wxml-dataBind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testKeyData: [
      "a",
      "b",
      "c"
    ],
    courseItem: [
      {
        id: 0,
        courseImg: "/assets/images/course.png",
        courseTitle: "Python-玩转人工智能系列",
        courseTeacher: "撩课-张益达",
        courseStudyCount: 25456367,
        isStar: true,
        // score: 100
      },{
        id: 1,
        courseImg: "/assets/images/qd.png",
        courseTitle: "web-玩转前端系列",
        courseTeacher: "撩课-snake",
        courseStudyCount: 2432,
        isStar: false,
        // score: 100
      }
    ]
  },
  _handleTap: function() {
    console.log("xxxxx")
    // 动态修改数据 testKeyData, unshift-添加在前面，push-添加在后面
    // this.data.testKeyData.push("d")
    this.data.testKeyData.unshift("d") // 这个方法调用后数据源已经发生改变了
    this.setData({ // 调了这个方法页面才会即时展示
      testKeyData: this.data.testKeyData
    })
    console.log(this.data.testKeyData)
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
    console.log("页面初次渲染完成！")
    setTimeout(() => {
      console.log("3秒钟到啦！", this)
      this.data.courseItem.push({
        id: 2,
        courseImg: "/assets/images/java.png",
        courseTitle: "Java-玩转后端系列",
        courseTeacher: "撩课-吕小布",
        courseStudyCount: 36412457,
        isStar: true,
        // score: 100
      })
      this.setData({
        courseItem: this.data.courseItem
      })
    }, 3000);
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