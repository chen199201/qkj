// pages/turntable/turntable.js
import pubFun from '../../utils/pubFun'
Page({
  data: {
    listData: [{
        name: '一起学堂专享号',
        img: 'https://image.sqqmall.com/2020/07/07/fd41d3ecb71bcde9.png'
      },
      {
        name: '50优惠券',
        img: 'https://image.sqqmall.com/2020/07/07/fd41d3ecb71bcde9.png'
      },
      {
        name: '50群直播',
        img: 'https://image.sqqmall.com/2020/07/07/fd41d3ecb71bcde9.png'
      },
      {
        name: '99优惠券',
        img: 'https://image.sqqmall.com/2020/07/07/fd41d3ecb71bcde9.png'
      },
    ],
    deg: 0,
    duration: 0,
    result: '',
    canClick: true,
    code: 'zhigouhaxiaoqi',
    popupShow: false,
    bigtop: '',



    result: [{
        name: '苹果笔记本',
        img: 'img/gift/gift-01.png',
        type: 1,
        date: '2020-05-23',
        status: 1
      },
      {
        name: '300积分',
        img: 'img/gift/gift-02.png',
        type: 2,
        date: '2020-05-23',
        status: 2
      },
      {
        name: '苹果笔记本',
        img: 'img/gift/gift-01.png',
        type: 1,
        date: '2020-05-23',
        status: 3
      },
      {
        name: '300积分',
        img: 'img/gift/gift-02.png',
        type: 2,
        date: '2020-05-23',
        status: 1
      },
    ],


    dzShow: false,
    isIpx: pubFun.isIpx(),
    modeH: '', //自定义头部高度
  },

  onLoad: function (e) {

  },

  txInfo() {
    this.setData({
      dzShow: true
    })
  },
  onClose() {
    this.setData({
      dzShow: false
    })
  },
  suc() {
    this.setData({
      dzShow: false
    })
  },
  onReady(){
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
  onPageScroll: function (e) {
    // 页面滚动时执行
    let num = e.scrollTop;
    this.setData({
      bigtop: num
    })
  },
  start: function () {
    if (this.data.canClick) {
      var random = parseInt(Math.random() * this.data.listData.length);
      var deg = 360 * 5 - random * Math.round(360 / this.data.listData.length);

      var self = this;
      this.setData({
        deg: deg,
        duration: 3.5,
        canClick: false
      })
      setTimeout(function () {
        self.setData({
          reslut: self.data.listData[random],
          duration: 0,
          deg: self.data.deg % 360,
          canClick: true
        })
        console.log('获得：' + self.data.listData[random].name)
      }, 3500)
    }
  },
  closePopup: function () {
    this.setData({
      popupShow: false
    })
  },
  openPopup: function () {
    this.setData({
      popupShow: true
    })
  },
  copy: function (e) {
    var data = e.target.dataset.text;
    wx.setClipboardData({
      data: data,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1500
        })
      }
    })
  }
})