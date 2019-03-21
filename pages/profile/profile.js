var api = require('../../config/api.js');
var util = require('../../utils/util.js');
var user = require('../../utils/user.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {
      nickName: '点击登录',
      avatarUrl: 'https://keblog-1252041665.cos.ap-beijing.myqcloud.com/wx_app/avatar.png'
    },
    order: {
      unpaid: 0,
      unship: 0,
      unrecv: 0,
      uncomment: 0
    },
    hasLogin: false
  },
  onShow: function () {

    //获取用户的登录信息
    if (app.globalData.hasLogin) {
      let userInfo = wx.getStorageSync('userInfo');
      this.setData({
        userInfo: userInfo,
        hasLogin: true
      });

      let that = this;
      util.request(api.UserIndex).then(function (res) {
        if (res.errno === 0) {
          that.setData({
            order: res.data.order
          });
        }
      });
    }

  },

  goLogin() {
    if (!this.data.hasLogin) {
      wx.navigateTo({
        url: "/pages/auth/login/login"
      });
    }
  },
  
})
