// pages/delivery/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prizeData: [{
        imgs: 'img/3.png',
        name: '波音747播放的747',
        readyNum: '8',
        unNun: '89'
      },
      {
        imgs: 'img/3.png',
        name: '波音747播放的747',
        readyNum: '8',
        unNun: '89'
      },
    ],
    openOver: false,
    currentDate: new Date().getTime() + 86400000,
    minDate: new Date().getTime(),
    openTime: pubFun.formatDuring((new Date()).getTime() + 86400000), //开奖时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 选择时间弹窗
  openTimeFun() {
    this.setData({
      openOver: true
    })
  },
  // 关闭时间选择弹窗
  onClose() {
    this.setData({
      openOver: false
    })
  },
  //确认开奖时间
  onInput(event) {
    console.log()
    let openTime = pubFun.formatDuring(event.detail)
    this.setData({
      openTime: openTime,
      openOver: false
    })
    console.log(openTime)
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