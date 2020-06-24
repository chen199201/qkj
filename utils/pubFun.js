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
  }
}
export default pubFun