// pages/groupMember/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberData:[
      {logo:'../../img/test.png',name:'Henry Park',identity:0,groupName:'Adelaidee…','jionTime':'1995/09/19'},
      {logo:'../../img/test.png',name:'Greer',identity:1,groupName:'Mable','jionTime':'1982/09/11'},
      {logo:'../../img/test.png',name:'Georgie Sc',identity:1,groupName:'Miller','jionTime':'2004/02/07'},
      {logo:'../../img/test.png',name:'Bruce',identity:3,groupName:'Lettie Adki','jionTime':'1984/11/11'},
    ]
  },


  //设为群管
  cancel(e){
    let memberData = this.data.memberData;
    let index = e.currentTarget.dataset.index;
    let identity = e.currentTarget.dataset.identity;
    if(identity==1){
      memberData[index].identity = 3;
    }else if(identity==3){
      memberData[index].identity = 1;
    }
    this.setData({
      memberData:memberData
    })
    wx.showToast({
      title: '设置成功',
      icon: 'success',
      duration: 1000
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