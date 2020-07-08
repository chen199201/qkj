// components/tabBar/index.js
import pubFun from '../../utils/pubFun'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    routername:{
      type:String,
      value:'',

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIPhoneX:pubFun.isIpx(),
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goLink(e){
      let link = e.currentTarget.dataset.link;
      console.log(link)
      wx.navigateTo({
        url: link,
      })
    },
  },
  attached(){
    console.log(this.data.isIPhoneX)
  }
})
