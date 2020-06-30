// components/backBtn/index.js
import pubFun from '../../utils/pubFun'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:'',
    }
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
    goHome(){
      pubFun.backHome()
    }
  }
})
