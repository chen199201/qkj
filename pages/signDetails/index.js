// pages/signDetails/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    smRankList:[
      {logo:'../../img/test.png',name:'Nor2222a Miles',cumulative:1,tag:'闪电侠'},
      {logo:'../../img/test.png',name:'Joseph Bates',cumulative:2,tag:'猎豹'},
      {logo:'../../img/test.png',name:'Nora',cumulative:3,tag:'鸵鸟'},
      {logo:'../../img/test.png',name:'Nora Miles',cumulative:4},
      {logo:'../../img/test.png',name:'Joseph Bates',cumulative:5},
      {logo:'../../img/test.png',name:'Nora',cumulative:6},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
    ],
    bigRank:[], //用于分割存个前三名
    smallRank:[],//3名之后
    isIpx:pubFun.isIpx(),
    bigtop:'',  //高度大于100时控制顶部title背景色
    routerName:'',

    modeH: '', //自定义头部高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.exchange();
    this.setData({
      routerName:pubFun.getCurrentPageUrl()
    })
  },
  onPageScroll: function(e) {
    // 页面滚动时执行
    let num = e.scrollTop;
    this.setData({
      bigtop:num
    })
  },
  //第一名与第二名交换位置，切割前三名
  exchange(){
    let bigRank = this.data.bigRank;
    let smallRank = this.data.smallRank;
    this.data.smRankList.forEach((item,index)=>{
      if(index<3){
        bigRank.push(item)
      }else{  
        smallRank.push(item)
      }
    })
   bigRank.splice(0,1,...bigRank.splice(1,1,bigRank[0]));
    this.setData({
      bigRank:bigRank,
      smallRank:smallRank
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