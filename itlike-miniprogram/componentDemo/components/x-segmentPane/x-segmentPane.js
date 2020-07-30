// components/x-segmentPane/x-segmentPane.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  externalClasses: ['segment-cla'],

  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0 // 当前 swiper 的 index
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerSelectChange: function (evt) { // 点击之后设置 swiper 为 index 对应的窗口
      let index = evt.detail.currentIdx
      console.log("pane-js index:", index)
      this.setData({
        index: index
      })
    },

    _handlerChange: function (evt) {
      let current = evt.detail.current
      let segmentBar = this.selectComponent("#x-sp-sb")
      segmentBar._setCurrent(current)
    }
  }
})
