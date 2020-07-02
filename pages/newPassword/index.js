// pages/newSign/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prizeData: {
      name: '测试',
      sintroduce: '这是打卡开始',
      eintroduce:'这是打卡结束',
      integral:90,
      signTime: {
        openTime: pubFun.formatDuringDay((new Date())),
        endTime: pubFun.formatDuringDay((new Date())),
      },
      signTimeInterval: {
        openTime: pubFun.formatDuringHours((new Date())),
        endTime: pubFun.formatDuringHours((new Date())),
      }
    },
    // vant时间参数
    minHour: 0,
    maxHour: 23,
    minDate: new Date().getTime(),
    currentDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    openBox: false, //选择开始时间
    endBox: false, //选择结束时间


    //时段参数
    timeDate: '00:00',
    timeOpen: false, //选择开始时段
    timeOver: false, //选择结束时段
    isIpx:pubFun.isIpx(),
  },

  // 选择时间弹窗
  openTimeFun(e) {
    let text = e.currentTarget.dataset.text
    switch (text) {
      case 'open':
        this.setData({
          openBox: true
        })
        break;
      case 'end':
        this.setData({
          endBox: true
        })
        break;
      case 'timeOpen':
        this.setData({
          timeOpen: true
        })
        break;
      case 'timeEnd':
        this.setData({
          timeOver: true
        })
        break;
    }



  },

  //确认开奖时间
  onInput(e) {
    let text = e.currentTarget.dataset.text;
    let time = pubFun.formatDuringDay(e.detail);
    let prizeData = this.data.prizeData;
    let signTime = this.data.prizeData.signTime;
    let signTimeInterval = this.data.prizeData.signTimeInterval;
    switch (text) {
      case 'open':
        signTime.openTime = time;
        this.setData({
          prizeData: prizeData,
          openBox: false
        })
        break;
      case 'end':
        signTime.endTime = time;
        this.setData({
          prizeData: prizeData,
          endBox: false,
        })
        break;
      case 'timeOpen':
        signTimeInterval.openTime = e.detail;
        this.setData({
          prizeData: prizeData,
          timeOpen: false,
        })
        break;
      case 'timeEnd':
        signTimeInterval.endTime = e.detail;
        this.setData({
          prizeData: prizeData,
          timeOver: false,
        })
        break;
    }
  },


  // 关闭时间选择弹窗
  onClose(e) {
    let text = e.currentTarget.dataset.text;
    switch (text) {
      case 'open':
        this.setData({
          openBox: false
        })
        break;
      case 'end':
        this.setData({
          endBox: false
        })
        break;
      case 'timeOpen':
        this.setData({
          timeOpen: false
        })
        break;
      case 'timeEnd':
        this.setData({
          timeOver: false
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  //新增确认
  submit() {
    console.log(this.data.prizeData)
    wx.navigateBack()
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