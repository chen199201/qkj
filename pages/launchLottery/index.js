// pages/launchLottery/index.js
import pubFun from '../../utils/pubFun'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 默认奖品数据
    defalutArr: [],
    // 奖品数据
    prizeTypeArr: [{
      "type": 0,
      "name": "123",
      "img": [],
      "num": '100',
      "sortNo": '',
      "probability": '89',
      "limitChecked": true,
      "limitNum":10
    }],

    //添加一个奖项
    addPrizeTypeArr: [{
      "type": 0,              //奖品类型
      "name": "",             //奖品名字
      "img": [],              //奖品图片
      "num": '',              //奖品数量
      "sortNo": '',           
      "probability": '',        //中奖概率
      "limitChecked": false,    //抽奖限制
      "limitNum":''             //抽奖积分限制
    }],
    //奖品类型选择
    optionArr: [{
      a: '实物',
      val: 0,
      isShow: true,
    }, {
      a: '虚拟',
      val: 1,
      isShow: false
    }, {
      a: '积分',
      val: 2,
      isShow: false
    }],
    //抽奖类型
    prizeTArr:[
      {text:'单次',val:0},
      {text:'循环',val:1}
    ],
    tindex:0, //抽奖类型选择
    smVal: '', //抽奖说明

    consumeNum:false, //参与消耗积分

    // 开奖方式
    items: [{
        name: 0,
        value: '按时间'
      },
      {
        name: 1,
        value: '即开即中',
        checked: 'true'
      },
    ],
    // 奖品类型选择参数
    num: 0,
    // 图片上传
    pics: ['http://content-sel.oss-cn-hangzhou.aliyuncs.com/Huskie/NTc1MDU3MTI4Nzg2NDlkYmE0YmZmOWNhOGZlYmJlNDU%3D.jpg'], //图片

    // vant时间参数
    minHour: 0,
    maxHour: 24,
    minDate: new Date().getTime(),
    currentDate: new Date().getTime() + 86400000,

    openTime: pubFun.formatDuring((new Date()).getTime() + 86400000), //开奖时间
    overTime: pubFun.formatDuring((new Date()).getTime() + 86400000), //结束时间
    kjTime: pubFun.formatDuringDay((new Date()).getTime()), //开奖时间

    openShow: false, //开始时间弹窗
    overShow: false, //结束时间
    kjShow: false, //开奖时间


    timeSetData: {
      numbers: '0',
      consume: {
        number: '90',
        check: true,
      },
      prizeTime: {
        time: pubFun.formatDuring((new Date()).getTime()),
        check: false,
      },
    },
    isIpx: pubFun.isIpx(),
    modeH: '', //自定义头部高度



  },

  // 选择时间弹窗
  openTimeFun(e) {
    let text = e.currentTarget.dataset.text;
    switch (text) {
      case 'open':
        this.setData({
          openShow: true
        })
        break;
      case 'end':
        this.setData({
          overShow: true
        })
        break;
      case 'kj':
        this.setData({
          kjShow: true
        })
        break;
    }
    console.log(e.currentTarget.dataset.text)
    // this.setData({
    //   openShow: true
    // })
  },
  //确认开奖时间
  onInput(e) {
    let text = e.currentTarget.dataset.text;
    let time = pubFun.formatDuring(e.detail);
    let openTime = this.data.openTime;
    let overTime = this.data.overTime;
    let kjTime = this.data.kjTime;
    console.log(e)
    switch (text) {
      case 'open':
        openTime = time;
        this.setData({
          openTime: openTime,
          openShow: false
        })
        break;
      case 'end':
        overTime = time;
        this.setData({
          overTime: overTime,
          overShow: false,
        })
        break;
      case 'kj':
        time = pubFun.formatDuringDay(e.detail);
        kjTime = time;
        this.setData({
          kjTime: kjTime,
          kjShow: false
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
          openShow: false
        })
        break;
      case 'end':
        this.setData({
          overShow: false
        })
        break;
      case 'kj':
        this.setData({
          kjShow: false
        })
        break;
    }


    this.setData({
      openShow: false
    })
  },
  tchange(e){
    let index = e.currentTarget.dataset.index;
    let tindex = this.data.tindex;
    tindex = index;
    this.setData({
      tindex:tindex
    })
  },

  // 中奖限制
  onChange(e){
    let defalutArr = this.data.defalutArr;
    let index = e.currentTarget.dataset.index;
    console.log(defalutArr[index],index)
    defalutArr[index].limitChecked = !defalutArr[index].limitChecked;
    this.setData({
      defalutArr:defalutArr
    })
  },

  //参与消耗积分
  jionChange(){
    let timeSetData = this.data.timeSetData;
    timeSetData.consume.check = !timeSetData.consume.check
    this.setData({
      timeSetData:timeSetData
    })
  },

  //兑奖有效期
  matchChange(){
    let timeSetData = this.data.timeSetData;
    timeSetData.prizeTime.check = !timeSetData.prizeTime.check
    this.setData({
      timeSetData:timeSetData
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(pubFun)
  },
  alert(e) {
    console.log(e.currentTarget.dataset.index)
  },
  //选择奖品类型
  getType(e) {
    let defalutArr = this.data.defalutArr;
    let idx = e.currentTarget.dataset.idx; //外层数组下标
    let opindex = e.currentTarget.dataset.opindex;
    defalutArr[idx].type = opindex;
    this.setData({
      defalutArr: defalutArr,
    })
  },
  setWay() {
    wx.navigateTo({
      url: '../prizeway/index',
    })
  },

  // 添加奖项
  addData() {
    let a = pubFun.obj(this.data.defalutArr.concat(this.data.addPrizeTypeArr));
    a.forEach((item, index) => {
      item.sortNo = index + 1;
    })
    let newArr = a;
    this.setData({
      defalutArr: newArr
    })
  },
  getVal(e) {
    let val = e.detail.value;
    let defalutArr = this.data.defalutArr;
    let idx = e.currentTarget.dataset.idx; //外层数组下标
    let nameval = e.currentTarget.dataset.nameval;
    if (nameval == 0) {
      defalutArr[idx].name = val;
    } else if (nameval == 1) {
      defalutArr[idx].num = val;
    } else if (nameval == 2) {
      defalutArr[idx].probability = val;
    } else {
      defalutArr[idx].lotteryAwardCodeList = val;
      console.log(defalutArr[idx].lotteryAwardCodeList)
    }
    this.setData({
      defalutArr: defalutArr,
    })
  },
  goCj() {
    console.log(this.data.defalutArr)
  },
  // 删除奖项
  delArr(e) {
    let index = e.currentTarget.dataset.delindex;
    let defalutArr = this.data.defalutArr;
    defalutArr.splice(index, 1);
    this.setData({
      defalutArr: defalutArr,
    })
  },
  // 开奖方式选择
  radioChange: function (e) {
    let index = e.currentTarget.dataset.index;
    if (this.data.openNum != index) {
      this.setData({
        openNum: index,
      })
    };
    if (index == 0) {
      this.setData({
        isTime: false
      })
    } else {
      this.setData({
        isTime: true
      })
    }
  },

  switchChange: function (e) {
    console.log('switch 发生 change 事件，携带值为', e.detail.value)
  },
  /**
   * 图片放大查看
   */
  previewImg: function (e) {
    var index = e.target.dataset.index; //当前图片地址
    var imgArr = e.target.dataset.list; //所有要预览的图片的地址集合 数组形式
    console.log(index, imgArr)
    wx.previewImage({
      current: imgArr[index],
      urls: imgArr,
    })
  },
  /**
   * 图片上传
   * 
   */

  //上传图片开始
  chooseImg: function (e) {
    var that = this;
    let idx = e.currentTarget.dataset.idx;
    let defalutArr = this.data.defalutArr;
    if (defalutArr[idx].img.length < 3) {
      wx.chooseImage({
        count: 3, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          for (var i = 0; i < tempFilePaths.length; i++) {
            defalutArr[idx].img.push(tempFilePaths[i]);
          }
          that.setData({
            defalutArr: defalutArr
          })
        },
      });
    } else {
      wx.showToast({
        title: '最多上传3张图片',
        icon: 'none',
        duration: 3000
      });

    }
  },
  // 删除图片
  deleteImg: function (e) {
    let index = e.currentTarget.dataset.index;
    let idx = e.currentTarget.dataset.idx;
    let defalutArr = this.data.defalutArr;
    defalutArr[idx].img.splice(index, 1);
    this.setData({
      defalutArr: defalutArr,
    })
  },
  // 预览图片
  previewImg1: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    console.log(index)
    //所有图片
    var pics = this.data.pics;
    wx.previewImage({
      //当前显示图片
      current: pics[index],
      //所有图片
      urls: pics
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let newArr = this.data.defalutArr.concat(this.data.prizeTypeArr);
    const child = this.selectComponent('.pubMenu');
    newArr.forEach((item, index) => {
      item.sortNo = index + 1;
    })
    this.setData({
      defalutArr: newArr
    })
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