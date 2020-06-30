// pages/newPrize/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prizeData:{name:'测试',introduce:'测试残品',pics:['http://content-sel.oss-cn-hangzhou.aliyuncs.com/Huskie/NTc1MDU3MTI4Nzg2NDlkYmE0YmZmOWNhOGZlYmJlNDU%3D.jpg'],types:[{names:'实物',val:0},{names:'虚拟',val:1}],stock:'77',integral:'88',limit:'99'},
    typeIndex:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  //上传图片开始
  chooseImg: function (e) {
    var that = this;
    let prizeData = this.data.prizeData;
    wx.chooseImage({
      count: 3, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        for (var i = 0; i < tempFilePaths.length; i++) {
          prizeData.pics.push(tempFilePaths[i]);
        }
        that.setData({
          prizeData: prizeData
        })
      },
    });
  },
  // 删除图片
  deleteImg: function (e) {
    let index = e.currentTarget.dataset.index;
    let prizeData = this.data.prizeData;
    prizeData.pics.splice(index, 1);
    this.setData({
      prizeData: prizeData,
    })
  },
  // 预览图片
  previewImg1: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    console.log(index)
    //所有图片
    var pics = this.data.prizeData.pics;
    wx.previewImage({
      //当前显示图片
      current: pics[index],
      //所有图片
      urls: pics
    })
  },
    //选择奖品类型
    getType(e) {
      let idx = e.currentTarget.dataset.idx;  //外层数组下标
      this.setData({
        typeIndex:idx
      })
    },
    //新增确认
    submit(){
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