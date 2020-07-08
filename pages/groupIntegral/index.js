// pages/groupIntegral/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {logo:'../../img/test.png',name:'Callie',groupName:'Steve Bell',integralNum:'138',leader:true},
      {logo:'../../img/test.png',name:'Violet R',groupName:'Mable Klein',integralNum:'464'},
      {logo:'../../img/test.png',name:'Mae Rho',groupName:'Mable Keller',integralNum:'276'},
      {logo:'../../img/test.png',name:'Mae Rho',groupName:'Mable Keller',integralNum:'276'},
      {logo:'../../img/test.png',name:'Mae Rho',groupName:'Mable Keller',integralNum:'276'},
      {logo:'../../img/test.png',name:'Mae Rho',groupName:'Mable Keller',integralNum:'276'},
      {logo:'../../img/test.png',name:'Mae Rho',groupName:'Mable Keller',integralNum:'276'},
    ],
    jumpLink:[
      {img:'img/2.png',text:'积分明细',link:'../../pages/groupPasswordSign/index'},
      {img:'img/3.png',text:'积分兑换',link:'../../pages/myPrizeList/index'},
      {img:'img/4.png',text:'任务规则',},
    ],
    integralTask:[
      {logo:'img/6.png',title:'群内发言',explain:'5积分/次，疲劳值10',addNum:'10'},
      {logo:'img/7.png',title:'邀人进群',explain:'5积分/次，疲劳值10',addNum:'10'},
      {logo:'img/8.png',title:'签到',explain:'5积分/次，疲劳值10',addNum:'10'},
      {logo:'img/9.png',title:'口令打卡',explain:'5积分/次，疲劳值10',addNum:'10'},
    ],
    jflay:false, //积分弹窗
    isIpx:pubFun.isIpx(),
    bigtop:'',  //高度大于100时控制顶部title背景色
    modeH: '', //自定义头部高度
  },
  onPageScroll: function(e) {
    // 页面滚动时执行
    let num = e.scrollTop;
    this.setData({
      bigtop:num
    })
  },
  jfClose(){
    this.setData({
      jflay:false
    })
  },
  jumpF(e){
    let link = e.currentTarget.dataset.link;
    if(!link){
      this.setData({
        jflay:true
      })
    }else{
      wx.navigateTo({
        url: link,
      })
    }
 
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
    const child = this.selectComponent('.pubMenu');
    let timer = setInterval(() => {
      if (child.data.myheight !== '') {
        this.setData({
          modeH: child.data.myheight
        })
        clearInterval(timer)
      }
    }, 10);
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