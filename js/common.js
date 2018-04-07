//页面头部所有属性及方法
var appHead = {
  goback: function(){
    alert('跳转到上一级')
    //window.history.go(-1)
  },
  goMePage: function(){
    alert('跳转到我的页面')
    window.location='http://www.baidu.com'
  }
}
