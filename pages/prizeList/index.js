// pages/prizeList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    przData: [{
        logo: '../../img/test.png',
        name: '易烊千玺的眼镜1',
        check: false,
        need: '89',
        exchange: '89',
        stock: '80'
      },
      {
        logo: '../../img/test.png',
        name: '易烊千玺的眼镜2',
        check: false,
        need: '89',
        exchange: '89',
        stock: '80'
      },
      {
        logo: '../../img/test.png',
        name: '易烊千玺的眼镜3',
        check: true,
        need: '89',
        exchange: '89',
        stock: '80'
      },
      {
        logo: '../../img/test.png',
        name: '易烊千玺的眼镜4',
        check: false,
        need: '89',
        exchange: '89',
        stock: '80'
      },
      {
        logo: '../../img/test.png',
        name: '易烊千玺的眼镜5',
        check: false,
        need: '89',
        exchange: '89',
        stock: '80'
      },
    ],
  },
  //状态切换
  onChange(e) {
    let przData = this.data.przData;
    let index = e.currentTarget.dataset.index;
    let _check = przData[index].check;
    przData[index].check = !_check;
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
        url: '../../pages/exchangeInfo/index',
      })
    } else if (index == 2) {
      wx.navigateTo({
        url: '../../pages/newPrize/index?reSet=1',
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