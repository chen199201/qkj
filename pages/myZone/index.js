// pages/myZone/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [{
        name: '我开通的',
        val: 0
      },
      {
        name: '我参与的',
        val: 1
      }
    ],
    menuIndex: 0,
    myOpenData: [{
        logo: '../../img/test.png',
        title: '不要害怕把自己的弱项暴露给他人',
        time: '2016/03/31',
        isGroup: true
      },
      {
        logo: '../../img/test.png',
        title: '我们为不懈的努力鼓掌，但按结果付酬',
        time: '2016/03/31'
      },
      {
        logo: '../../img/test.png',
        title: '我们为不懈的努力鼓掌，但按结果付酬',
        time: '2016/03/31'
      },
      {
        logo: '../../img/test.png',
        title: '1.1×1.1×1.1×……×1.1≈3',
        time: '2016/03/31',
        isGroup: true
      },
      {
        logo: '../../img/test.png',
        title: '不要害怕把自己的弱项暴露给他人',
        time: '2016/03/31',
        isGroup: true
      },
      {
        logo: '../../img/test.png',
        title: '我们为不懈的努力鼓掌，但按结果付酬',
        time: '2016/03/31'
      },
      {
        logo: '../../img/test.png',
        title: '我们为不懈的努力鼓掌，但按结果付酬',
        time: '2016/03/31'
      },
      {
        logo: '../../img/test.png',
        title: '1.1×1.1×1.1×……×1.1≈3',
        time: '2016/03/31',
        isGroup: true
      },
      {
        logo: '../../img/test.png',
        title: '1.1×1.1×1.1×……×1.1≈3',
        time: '2016/03/31',
        isGroup: true
      },
      {
        logo: '../../img/test.png',
        title: '1.1×1.1×1.1×……×1.1≈3',
        time: '2016/03/31',
        isGroup: true
      },
      {
        logo: '../../img/test.png',
        title: '1.1×1.1×1.1×……×1.1≈3',
        time: '2016/03/31',
        isGroup: true
      },
    ],
    routerName: '',
    isIpx: pubFun.isIpx(),
    bigtop: '',

    modeH:'', //自定义头部高度
  },
  //菜单切换
  menuChange(e) {
    let index = e.currentTarget.dataset.index;
    let menuIndex = this.data.menuIndex;
    menuIndex = index;
    this.setData({
      menuIndex: menuIndex
    })
  },
  jump() {
    wx.navigateTo({
      url: '../myZoneDetail/index'
    })
  },
  getChildComponent: function () {

  },
  onPageScroll: function (e) {
    // 页面滚动时执行
    let num = e.scrollTop;
    this.setData({
      bigtop: num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      routerName: pubFun.getCurrentPageUrl()
    })
    // console.log(this.data.routerName)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const child = this.selectComponent('.pubMenu');
    this.setData({
      modeH:child.data.myheight
    })
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