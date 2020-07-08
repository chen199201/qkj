// pages/groupLuckDraw/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    luckData: [{
        types: '进行中',
        title: '哇哦999999999999999元现金大红包',
        number: '8989',
        time: '2020/08/09-2020/09/08',
        tys: '0'
      },
      {
        types: '待开始',
        title: '哇哦9毛红包',
        number: '8989',
        time: '2020/08/09-2020/09/08',
        tys: '1'
      },
      {
        types: '已撤销',
        title: '哇哦999999999999999元现金大红包',
        number: '8989',
        time: '2020/08/09-2020/09/08',
        tys: '2'
      },
      {
        types: '已完成',
        title: '哇哦9毛红包',
        number: '8989',
        time: '2020/08/09-2020/09/08',
        tys: '3'
      },
      {
        types: '已完成',
        title: '哇哦9毛红包',
        number: '8989',
        time: '2020/08/09-2020/09/08',
        tys: '3'
      },
      {
        types: '已完成',
        title: '哇哦9毛红包',
        number: '8989',
        time: '2020/08/09-2020/09/08',
        tys: '3'
      },
    ],
    bigtop:'',  //高度大于100时控制顶部title背景色
    isIpx:pubFun.isIpx(),
    modeH: '', //自定义头部高度
  },


  onPageScroll: function(e) {
    // 页面滚动时执行
    let num = e.scrollTop;
    this.setData({
      bigtop:num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //去历史抽奖
  gohis() {
    wx.navigateTo({
      url: '../lotteryHistory/index',
    })
  },
  //发起新抽奖
  goNew() {
    wx.navigateTo({
      url: '../launchLottery/index',
    })
  },
  //去抽奖
  goLuck(){
    wx.navigateTo({
      url: '../turntable/index',
    })
  },
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