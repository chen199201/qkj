// pages/groupSign/index.js
import pubFun from '../../utils/pubFun'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dayList:[
      {day:'周一',dayNum:'1',isSign:0},
      {day:'周二',dayNum:'2',isSign:0},
      {day:'周三',dayNum:'3',isSign:1},
      {day:'周四',dayNum:'4',isSign:2},
      {day:'周五',dayNum:'5',isSign:2},
      {day:'今天',dayNum:'6',isSign:2},
      {day:'周日',dayNum:'7',isSign:2},
    ],
    today:4,  //今天
    todaySign:false,  //今天是否签到
    brank:[
      {name:'总榜',val:0},
      {name:'今日',val:1},
      {name:'昨日',val:2},
      {name:'本月',val:3},
    ],
    brankIndex:0,//当前大榜单
    smRank:[
      {name:'活跃榜',val:0},
      {name:'神速榜',val:1},
      {name:'毅力榜',val:2},
    ],
    smRankIndex:0,  //当前小榜单
    smRankList:[
      {logo:'../../img/test.png',name:'Nor2222a Miles',cumulative:1,tag:'闪电侠'},
      {logo:'../../img/test.png',name:'Joseph Bates',cumulative:2,tag:'猎豹'},
      {logo:'../../img/test.png',name:'Nora',cumulative:3,tag:'鸵鸟'},
      {logo:'../../img/test.png',name:'Nora Miles',cumulative:4},
      {logo:'../../img/test.png',name:'Joseph Bates',cumulative:5},
      {logo:'../../img/test.png',name:'Nora',cumulative:6},
      {logo:'../../img/test.png',name:'Miles',cumulative:7},
    ],
    bigRank:[], //用于分割存个前三名
    smallRank:[],//3名之后
    bigtop:'',  //高度大于100时控制顶部title背景色
    isIpx:pubFun.isIpx(),
    modeH: '', //自定义头部高度
    shareBox:false,
  },


  // 签到
  signFun(e){
    let todaySign = this.data.todaySign;
    let dayList = this.data.dayList;
    let index = e.currentTarget.dataset.index;
    let item = e.currentTarget.dataset.item;
    let today = this.data.today;
    if(!todaySign&&item.dayNum==today){
      dayList[index].isSign = 0;
      todaySign = true;
      this.setData({
        dayList:dayList,
        todaySign:todaySign,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.exchange()
  },

  //大排行榜切换
  bChange(e){
    let val = e.currentTarget.dataset.index;
    let brankIndex = this.data.brankIndex;
    brankIndex = val;
    this.setData({
      brankIndex:brankIndex
    })
  },
  //大排行榜切换
  sChange(e){
    let val = e.currentTarget.dataset.index;
    let smRankIndex = this.data.smRankIndex;
    smRankIndex = val;
    this.setData({
      smRankIndex:smRankIndex
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

  onPageScroll: function(e) {
    // 页面滚动时执行
    let num = e.scrollTop;
    this.setData({
      bigtop:num
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