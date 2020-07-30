//app.js
App({
  onLaunch: function () {
    if (wx.cloud) { // 能调用存在才初始化，不存在则提示升级微信版本
      // 初始化云环境
      wx.cloud.init({
        env: 'ryan-wxai3', // 指定云环境
        traceUser: true // 跟踪用户访问
      })
    }

  },
  globalData: {
    userInfo: null
  }
})