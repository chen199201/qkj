// pages/myPrizeList/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    przData:[
      {logo:'../../img/test.png',name:'易烊千玺的眼镜',check:'true',need:'89'},
      {logo:'../../img/test.png',name:'易烊千玺的眼镜',check:'true',need:'89'},
      {logo:'../../img/test.png',name:'易烊千玺的眼镜',check:'false',need:'189',},
      {logo:'../../img/test.png',name:'易烊千玺的眼镜',check:'true',need:'89'},
      {logo:'../../img/test.png',name:'易烊千玺的眼镜',check:'false',need:'89'},
    ],
    isIpx:pubFun.isIpx(),
  },

  lookMyprize(){
    wx.navigateTo({
      url: '../../pages/prizeInfo/index',
    })
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