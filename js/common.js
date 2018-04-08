//页面头部所有属性及方法
let appHead = {
  //头部返回按钮
  goback() {
    console.log('appHead.goback()')
    //window.history.go(-1)
  },
  //头部个人中心按钮
  goMePage() {
    console.log('appHead.goMePage()')
    //window.location='http://www.baidu.com'
  }
}

//简单页面方法
let smPage = {
  //使用现金券按钮方法
  useCoupon() {
    console.log('smPage.useCoupon()');
  }
}

//表单页面方法
let formPage = {
  //验证码图片点击更换
  yzmChange() {
    console.log('formPage.yzmChange()');
  },
  //登录按钮方法
  login() {
    console.log('formPage.login()');
  },
  //获取短信验证码按钮
  getSmsYzm() {
    console.log('formPage.getSmsYzm()');
    let _t = $('.sms_yzm_btn');
    if (!_t.attr('disabled')) {
      _t.text('重新发送(60s)');
      _t.attr('disabled', true)
      let t = 59;
      let s = setInterval(function() {
        if (t != 0) {
          _t.text('重新发送(' + t + 's)');
          --t;
        } else {
          clearInterval(s);
          _t.attr('disabled', false)
          _t.text('发送验证码');
        }
      }, 1000)
    }
  },
  //找回密码按钮方法
  findPwd() {
    console.log('formPage.findPwd()');
  },
  //支付宝账户绑定按钮
  alipayBind() {
    console.log('formPage.alipayBind()')
  },
  //用户注册按钮
  register() {
    console.log('formPage.register()')
  }
}