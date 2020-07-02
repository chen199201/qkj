// pages/prizeList/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    przData: [{
        name: '易烊千玺的眼镜1',
        check: false,
        swCheck:false,
        time:'2020/08/09-2020/09/08',
        sk:'08:09–18:19',
        people:'89',
        status:1,
      },
      {
        name: '易烊千玺的眼镜1',
        check: true,
        swCheck:false,
        time:'2020/08/09-2020/09/08',
        sk:'08:09–18:19',
        people:'89',
        status:0,
      },
      {
        name: '易烊千玺的眼镜1',
        check: false,
        swCheck:false,
        time:'2020/08/09-2020/09/08',
        sk:'08:09–18:19',
        people:'89',
        status:0,
      },
      {
        name: '易烊千玺的眼镜1',
        check: false,
        swCheck:false,
        time:'2020/08/09-2020/09/08',
        sk:'08:09–18:19',
        people:'89',
        status:1,
      },
    ],
    isIpx:pubFun.isIpx(),
  },
  //口令状态切换
  onChange(e) {
    let przData = this.data.przData;
    let index = e.currentTarget.dataset.index;
    let sw =  e.currentTarget.dataset.sw;
    let _check = przData[index].check;
    let _swCheck = przData[index].swCheck;
    if(sw==0){
      przData[index].check = !_check;
    }else if(sw==1){
      przData[index].swCheck = !_swCheck;
    } 
    this.setData({
      przData: przData
    })
  },
  //查看详情或编辑
  look(e) {
    let index = e.currentTarget.dataset.index
    console.log();
    if (index == 1) {
      wx.navigateTo({
        url: '../../pages/signDetails/index',
      })
    } else if (index == 2) {
      wx.navigateTo({
        url: '../../pages/newPassword/index',
      })
    }
  },
  //删除
  del(e){
    let index = e.currentTarget.dataset.index;
    let przData = this.data.przData;
    przData.splice(index,1);
    this.setData({
      przData:przData
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