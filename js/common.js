$('.head_back').click(function() {
  appHead.goback()
})

$('.head_me').click(function() {
  appHead.goMePage()
})

//页面头部所有属性及方法
const appHead = {
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
const smPage = {
  //使用现金券按钮方法
  useCoupon() {
    console.log('smPage.useCoupon()');
  },
  copyCoupon() {
    console.log('smPage.copyCoupon()');
  },
  delCoupon(_t) {
    console.log('smPage.delCoupon()');
  },
  editCoupon(_t) {
    console.log('smPage.editCoupon()');
  },
  addCoupon() {
    console.log('smPage.addCoupon()');
  },
  albumAdd() {
    console.log('smPage.albumAdd()');
  },
  albumDel(_t) {
    console.log('smPage.albumDel()');
  }
}

//表单页面方法
const formPage = {
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

//列表页面方法
const list = {
  switchTab(_t) {
    console.log('list.switchTab()');
    let n = _t.index() + 1;
    $('.single_tab:nth-child(' + n + ')').addClass('f-g').siblings().removeClass('f-g');
    $('.tab_page:nth-child(' + n + ')').show().siblings().hide();
  },
  search() {
    console.log('list.search()');
    v = $('#search_bar').val();
    if (v == '') {
      alert('请输入您要搜索的内容！')
    } else {
      alert('搜索' + v)
    }
  },
  fns(cname) {
    switch (cname) {
      case 'f_accept':
        console.log('新朋友接受');
        break;
      case 'f_refuse':
        console.log('新朋友拒绝');
        break;
      case 'f_del':
        console.log('删除朋友');
        break;
      case 's_accept':
        console.log('新合作店家接受');
        break;
      case 's_refuse':
        console.log('新合作店家拒绝');
        break;
      case 's_del':
        console.log('删除合作店家');
        break;
      case 's_view':
        console.log('查看合作店家');
        break;
      default:
        console.log('button指令获取错误');
    }
  }
}

//我的页面方法
const my = {
  withdraw(way) {
    console.log('my.withdraw()');
    if (way == 'wechat') {
      //微信
      console.log('微信提现');
    } else if (way == 'alipay') {
      //支付宝
      console.log('支付宝提现');
    } else {
      console.log('提现方式获取错误');
      return false;
    }
  },
  accChange() {
    console.log('my.accChange()');
  },
  withdrawAll() {
    console.log('my.withdrawAll()');
    m = $('#change_balance').text();
    $('#w_money_value').val(m);
  }
}