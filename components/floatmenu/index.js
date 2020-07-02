// components/floatmenu/index.js
import pubFun from '../../utils/pubFun'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'',
    },
    color:{
      type:String,
      value:'',
    },
    bgcolor:{
      type:String,
      value:'',
    },
    bigtop:{
      type:Number,
      value:''
    },
    leftshow:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    floatData:[
      {logo:'img/9.png',name:'口令打卡',link:'../../pages/groupPasswordSign/index'},
      {logo:'img/10.png',name:'群签到',link:'../../pages/groupSign/index'},
      {logo:'img/11.png',name:'群积分',link:'../../pages/groupIntegral/index'},
      {logo:'img/12.png',name:'指令设置',link:'../../pages/groupPassword/index'},
      {logo:'img/13.png',name:'群抽奖',link:'../../pages/groupLuckDraw/index'},
      {logo:'img/14.png',name:'返回空间',link:'../../pages/myZone/index'},
    ],
    show:false,
    isIPhoneX:pubFun.isIpx(),
    routerName:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    backUp(){
      wx.navigateBack({
      })
    },
    menuShow(){
      let show = this.data.show;
      show = !show;
      this.setData({
        show:show
      })
    },
    jumpLink(e){
      let link = e.currentTarget.dataset.item.link;
      if(this.data.routerName==link){
        return
      }
      this.setData({
        show:false
      })
      if(link=='../../pages/myZone/index'){
        wx.redirectTo({
          url:link
        })
      }else{
        wx.navigateTo({
          url: link,
        })
      }
    },
  },
  attached(){
    let link = pubFun.getCurrentPageUrl();
    link = '../../'+link;
    this.setData({
      routerName:link
    })
  },
  
})
