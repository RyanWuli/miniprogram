// components/x-courseItem/x-courseItem.js
Component({

  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log("页面被展示------")
    },
    hide: function() {
      // 页面被隐藏
      console.log("页面被隐藏------")
    },
    resize: function(size) {
      // 页面尺寸变化
      console.log("页面尺寸变化------")
    }
  },

  lifetimes: {
    created: function () {
      console.log("组件被创建-----new")
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("组件被加载到页面")
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("组件从页面中移除")
    },
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})