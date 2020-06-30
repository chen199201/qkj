// pages/myZoneDetail/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityData:[
      {isSign:0,title:'本群发起的抽奖活动',time:'2020/08/09-2021/08/09',imgData:['img/3.png','img/3.png','img/3.png'],people:'89'},
      {isSign:0,title:'本群发起的抽奖活动',time:'2020/08/09-2021/08/09',imgData:['img/3.png','img/3.png','img/3.png'],people:'89'},
      {isSign:1,title:'本群发起的抽奖活动',time:'2020/08/09-2021/08/09',imgData:['img/3.png','img/3.png','img/3.png'],people:'89'},
      {isSign:0,title:'本群发起的抽奖活动',time:'2020/08/09-2021/08/09',imgData:['img/3.png','img/3.png','img/3.png'],people:'89'},
      {isSign:0,title:'本群发起的抽奖活动',time:'2020/08/09-2021/08/09',imgData:['img/3.png','img/3.png','img/3.png'],people:'89'},
    ],
    routerName:'',
    floatData:[
      {logo:'img/9.png',name:'口令打卡'},
      {logo:'img/10.png',name:'群签到'},
      {logo:'img/11.png',name:'群积分'},
      {logo:'img/12.png',name:'指令设置'},
      {logo:'img/13.png',name:'群抽奖'},
      {logo:'img/14.png',name:'返回空间'},
    ],
    show:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
  onLoad: function (options) {
    this.setData({
      routerName:pubFun.getCurrentPageUrl()
    })
    console.log(this.data.routerName)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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