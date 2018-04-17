let boxArr = []; //小键盘数组
let tipNum = 0; //默认小键盘输入值

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
  },
  payTips() {
    console.log('smPage.payTips()')
  },
  itemRec() {
    console.log('smPage.itemRec()')
  },
  getCoupon() {
    console.log('smPage.getCoupon()');
  },
  bindWechat() {
    console.log('smPage.bindWechat()');
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
  },
  //页面小键盘输入
  sKeyboard(v) {
    let p = $('#page_input');
    let arrNum = '';

    p.val('')

    if (v == 'back') {
      boxArr.pop();
    } else {
      if (v == '.' && $.inArray('.', boxArr) != -1) {

      } else {
        boxArr.push(v)
      }
    }

    if ($.inArray('.', boxArr) == -1 && boxArr[0] == '0' && boxArr.length > 1) {
      boxArr.shift()
    }

    if (boxArr.indexOf('.') == 0 && boxArr.length > 1) {
      boxArr.unshift('0');
    }

    $.each(boxArr, function(i, n) {
      arrNum += n;
      p.val(arrNum);
    })

    tipNum = parseFloat(p.val()) //金额
    console.log(tipNum)
  },
  couponRemove(_t) {
    $('.coupon_name').text('无');
    $('.cur_coupon').addClass('no-coupon')
    _t.hide();
    couponIndex = 0;
  },
  couponSelect(_t) {
    _t.addClass('coupon_checked').siblings().removeClass('coupon_checked');
    couponIndex = $('.coupon_checked').index() + 1;
    $('.cur_coupon').removeClass('no-coupon');
    $('.icon-remove').show();
  },
  shopSave(_t) {
    console.log('保存')
  },
  shopApply() {
    console.log('提交申请');
  },
  shopChange() {
    console.log('确认添加/修改');
  },
  ptChange() {
    let payType = $('#payType').val();
    $('.change_' + payType + '').show().siblings().hide();
  },
  addSendCoupon() {
    layer.open({
      className: 'bg-g-title',
      shadeClose: false,
      title: [
        '添加发放现金券',
        'background-color: #41c416; color:#fff;'
      ],
      content: '满<input class="new_coupon" id="man_yuan" type="tel">减<input class="new_coupon" id="jian_yuan" type="tel">元',
      btn: ['添加', '取消'],
      yes: function(index) {
        let man = parseInt($('#man_yuan').val());
        let jian = parseInt($('#jian_yuan').val());
        if (man >= jian) {
          $('.c_box').append('<li class="flexBox fb-v-center"><p>满' + man + '减' + jian + '元</p><i class="icon-remove"></i></li>')
          layer.close(index);
        } else {
          alert('满减金额不能小于优惠金额');
        }
      }
    })
  },
  itemApply() {
    console.log('提交')
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
  },
  orderDel(_t) {
    console.log('list.orderDel()');
    layer.open({
      content: '您确定要删除吗？',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('删除');
        layer.close(index);
      }
    });
  },
  payTipDel(_t) {
    console.log('list.orderDel()');
    layer.open({
      content: '您确定要删除吗？',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('删除');
        layer.close(index);
      }
    });
  },
  newQuicknote() {
    console.log('list.newQuicknote()');
    layer.open({
      className: 'bg-g-title',
      shadeClose: false,
      title: [
        '新增快捷回复',
        'background-color: #FF4351; color:#fff;'
      ],
      content: '<textarea id="layer-input" placeholder="请输入快捷回复"></textarea>',
      btn: ['添加', '取消'],
      yes: function(index) {
        console.log($('#layer-input').val())
        alert('添加新快捷回复');
        layer.close(index);
      }
    });
  },
  editQuicknote(_t) {
    n = _t.parent().prev().text();
    layer.open({
      className: 'bg-g-title',
      shadeClose: false,
      title: [
        '编辑快捷回复',
        'background-color: #FF4351; color:#fff;'
      ],
      content: '<textarea id="layer-input">' + n + '</textarea>',
      btn: ['添加', '取消'],
      yes: function(index) {
        alert('添加新快捷回复');
        layer.close(index);
      }
    });
  },
  delQuicknote(_t) {
    layer.open({
      content: '您确定要删除吗？',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('删除');
        layer.close(index);
      }
    });
  },
  delCoupon(_t) {
    layer.open({
      content: '您确定要删除该现金券吗？',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('删除');
        layer.close(index);
      }
    });
  },
  delRec(_t) {
    layer.open({
      content: '您确定要删除吗？',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('删除');
        layer.close(index);
      }
    });
  },
  newItem() {
    console.log('list.newItem()')
  },
  editItem() {
    console.log('list.editItem()')
  },
  delItem(_t) {
    layer.open({
      content: '您确定要删除吗？',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('删除');
        layer.close(index);
      }
    });
  },
  iRecharge(_t) {
    layer.open({
      className: 'integral',
      content: '<h3>请输入六位消费密码</h3><input type="tel" maxlength="6">',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('确定');
        layer.close(index);
      }
    });
  },
  iExpense(_t) {
    layer.open({
      className: 'integral',
      content: '<p class="use_shop">消费店铺：丫丫丫的小店</p><p class="use_shop">消费店铺：丫丫丫的小店</p><p class="i_remain">可用积分：<b class="remain_value">800</b></p><input type="text" class="use_value" placeholder="请输入消费积分......">',
      btn: ['确定', '取消'],
      yes: function(index) {
        alert('确定');
        layer.close(index);
      }
    });
  },
  iSearch() {
    console.log('list.search()');
    v = $('#search_bar').val();
    if (v == '') {
      alert('请输入您要搜索的内容！')
    } else {
      alert('搜索' + v)
    }
  },
  cRecBtns(n, _t) {
    switch (n) {
      case 'c_r_accept':
        console.log(_t.text())
        break;
      case 'c_r_refuse':
        console.log(_t.text())
        break;
      case 'c_r_contact':
        console.log(_t.text())
        break;
      case 'c_r_delete':
        console.log(_t.text())
        break;
      default:
        console.error('btnType error')
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

const pay = {
  chooseCoupon() {
    layer.open({
      className: 'coupon_layer',
      content: '<div class="container_layer"><input type="text" class="input_layer" placeholder="现金券号码" /><ul class="c_list_layer"><li>满50减10元</li><li>满100减30元</li><li>满1000减300元</li></ul></div>',
      success: function(e) {
        $('.c_list_layer li:nth-child(' + couponIndex + ')').addClass('coupon_checked').siblings().removeClass('coupon_checked');
      },
      btn: ['使用', '取消'],
      yes: function(index) {
        $('.coupon_name').text($('.coupon_checked').text())
        layer.close(index);
      }
    });
  },
  payMethod(_t) {
    util.singleSwitch(_t, 'p_m_checked', function() {
      payMethod = $('.p_m_checked').index();
      console.log('payMethod:' + payMethod);
    })
  },
  pay() {
    console.log('触发支付');
  }
}

//封装常用函数
const util = {
  //单选切换class函数
  singleSwitch(ele, cls, callback) {
    ele.addClass(cls).siblings().removeClass(cls);
    if (typeof(callback) != 'undefined') {
      callback();
    }
  },
  selectChange(e, t, callback) {
    if (e.val() == '1') {
      t.show();
    } else {
      t.hide();
    }
    if (typeof(callback) != 'undefined') {
      callback();
    }
  }
}