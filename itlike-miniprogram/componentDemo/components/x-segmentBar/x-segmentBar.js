// components/x-segmentBar/x-segmentBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // segmentItems: Array // 外界传值的话只定义类型就行了
    segmentItems: { // 指定默认值方式
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerTap: function (evt) {
      let cid = evt.currentTarget.id
      console.log(cid)
      this.setData({
        currentIndex: cid
      })
      // 触发一个自定义事件，并且把数据传递出去
      this.triggerEvent("selectChange", {currentIdx: cid})
    },
    _setCurrent: function (current) {
      this.setData({
        currentIndex: current
      })
    }
  }
})
