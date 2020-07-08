// pages/prizeInfo/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {name:'奖品名称',time:'1972/07/23',status:0,address:0},
      {name:'Julia Reid',time:'1972/07/23',status:1,address:0},
      {name:'Howard',time:'1972/07/23',status:1,address:1},
      {name:'Troy Oliver',time:'1972/07/23',status:1,address:0},
      {name:'Shane King',time:'1972/07/23',status:1,address:0},
    ],
    tabBar:[
    ],
    routerName:'',
    isIpx:pubFun.isIpx(),
    modeH: '', //自定义头部高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      routerName:pubFun.getCurrentPageUrl()
    })
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