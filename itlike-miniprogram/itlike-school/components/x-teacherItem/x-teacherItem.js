// components/x-teacherItem/x-teacherItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    teacherItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelete: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _deleteItem: function () {
      console.log("长按被触发！")
      this.setData({
        isDelete: !this.data.isDelete
      })
    },
    _handlerDelete: function () {
      console.log("删除条目")
      wx.showModal({
        title: '删除',
        content: '是否删除该条目？',
        success: (res) => {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.showToast({
              title: '删除成功',
            })
            this.setData({
              isDelete: false
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
            this.setData({
              isDelete: false
            })
          }
        }
      })
    }
  }
})
