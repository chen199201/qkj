// pages/ruleSet/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode1: [{
        operation: '群内发言',
        integral: '22',
        fatigue: '64'
      },
      {
        operation: '群内呼叫',
        integral: '22',
        fatigue: '64'
      },
      {
        operation: '@管理',
        integral: '22',
        fatigue: '64'
      },
    ],
    punch: [{
      name: '口令打卡',
      integral: '22',
      fatigue: '64'
    }],
    sign: [{
      name: '群内签到',
      integral: '22',
      fatigue: '64'
    }],
    mode2: [{
        text: '群主群管可在群内@成员+积分+数额来手动为成员增加（减少）积分例如：@嘻嘻哈哈大宣传 积分20（@嘻嘻哈哈大宣传 积分-89），即给洗嘻嘻哈哈大宣传加（减）20积分'
      },
      {
        text: '禁止同时为多人加减积分'
      },
      {
        text: '禁止一分钟内为同一个成员增加或减少积分'
      },
    ],
    levelSet: [{
        name: '濮凡g康',
        need: '500'
      },
      {
        name: '平莎辰',
        need: '500'
      },
      {
        name: '信馥',
        need: '500'
      },
      {
        name: '欧涛',
        need: '500'
      },
    ],
    openIntegral: false, //开启群积分
    typea: false, //方式1
    typeText: '设置',
    jfCheck: false,
    pswCheck: false,
    qdCheck: false,

    nameSet: false, //名称设置
    typeb: false, //等级设置
    levelText: '设置',
    isIpx: pubFun.isIpx(),
    modeH: '', //自定义头部高度
  },

  //开启群积分
  onChange() {
    let openIntegral = this.data.openIntegral;
    openIntegral = !openIntegral;
    this.setData({
      openIntegral: openIntegral
    })
  },
  // 邀请人积分播报
  jfChange() {
    let jfCheck = this.data.jfCheck;
    jfCheck = !jfCheck;
    this.setData({
      jfCheck: jfCheck
    })
  },
  // 口令打卡
  pswChange() {
    let pswCheck = this.data.pswCheck;
    pswCheck = !pswCheck;
    this.setData({
      pswCheck: pswCheck
    })
  },
  // 群内签到播报
  qdChange() {
    let qdCheck = this.data.qdCheck;
    qdCheck = !qdCheck;
    this.setData({
      qdCheck: qdCheck
    })
  },
  // 积分设置
  seta() {
    let typea = this.data.typea;
    typea = !typea;
    if (typea) {
      this.setData({
        typeText: '保存',
        typea: typea
      })
    } else {
      let flag = true;
      this.data.mode1.forEach(item => {
        if (item.integral == '') {
          flag = false
        }
      })
      if (flag) {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
        })
        this.setData({
          typeText: '设置',
          typea: typea
        })
      } else {
        wx.showToast({
          title: '请输入',
          icon: 'none',
        })
      }
    }
  },
  // 等级设置
  setb() {
    let typeb = this.data.typeb;
    let nameSet = this.data.nameSet;
    typeb = !typeb;
    nameSet = !nameSet;
    if (typeb) {
      this.setData({
        levelText: '保存',
        typeb: typeb,
        nameSet: nameSet
      })
    } else {
      let flag = true;
      this.data.levelSet.forEach(item => {
        if (item.need == '') {
          flag = false
        }
      })
      if (flag) {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
        })
        this.setData({
          levelText: '设置',
          typeb: typeb,
          nameSet: nameSet
        })
      } else {
        wx.showToast({
          title: '请输入',
          icon: 'none',
        })
      }
    }
  },
  // 删除
  del(e) {
    let index = e.currentTarget.dataset.index;
    let levelSet = this.data.levelSet;
    levelSet.splice(index, 1);
    this.setData({
      levelSet: levelSet
    })

  },
  //等级操作
  djgetVal(e) {
    let inval = e.detail.value;
    let index = e.currentTarget.dataset.index;
    let levelSet = this.data.levelSet;
    let text = e.currentTarget.dataset.text;
    if (text == 'name') {
      levelSet[index].name = inval;
    } else if (text == 'jf') {
      levelSet[index].need = inval;
      this.setData({
        levelSet: levelSet
      })
    }

  },

  //积分操作
  getVal(e) {
    let inval = e.detail.value;
    let index = e.currentTarget.dataset.index;
    let mode1 = this.data.mode1;
    mode1[index].integral = inval;
    this.setData({
      mode1: mode1
    })
  },
  //获取修改后的数字
  setInput(e) {
    let inval = e.currentTarget.dataset.inval;
    let index = e.currentTarget.dataset.index;
    let mode1 = this.data.mode1;
    mode1[index].integral = inval;
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