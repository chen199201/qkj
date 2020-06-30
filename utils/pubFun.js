const pubFun = {
  // 时间转换
  add0(m) {
    return m < 10 ? '0' + m : m
  },
  // 时间转换
  formatDuring(timestamp) {
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    return year + '/' + this.add0(month) + '/' + this.add0(date) + ' ' + this.add0(hours) + ':' + this.add0(minutes);
  },
  // 深拷贝
  obj(obj) {
    let tmp = JSON.stringify(obj);
    let result = JSON.parse(tmp);
    return result;
  },
  /*获取当前页url*/
  getCurrentPageUrl() {
    var pages = getCurrentPages() //获取加载的页面
    var currentPage = pages[pages.length - 1] //获取当前页面的对象
    var url = currentPage.route //当前页面url
    return url
  },

  /*获取当前页带参数的url*/
  getCurrentPageUrlWithArgs() {
    var pages = getCurrentPages() //获取加载的页面
    var currentPage = pages[pages.length - 1] //获取当前页面的对象
    var url = currentPage.route //当前页面url
    var options = currentPage.options //如果要获取url中所带的参数可以查看options

    //拼接url的参数
    var urlWithArgs = url + '?'
    for (var key in options) {
      var value = options[key]
      urlWithArgs += key + '=' + value + '&'
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

    return urlWithArgs
  },
  //返回群中心
  backHome(){
    wx.navigateTo({
      url: '../../pages/myZone/index',
    })
  },
}
export default pubFun