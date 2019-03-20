//获取应用实例
const app = getApp()
Page({
  data: {

  },
  //登录获取code
  userinfoget: function () {
    wx.login({
      success: function (res) {
        console.log('code:' + res.code)
        //发送请求
        wx.request({
          url: 'http://localhost:8085/login', //改成自己的服务器地址
          data: {
            code: res.code,//上面wx.login()成功获取到的code
            operFlag: 'getOpenid',
          },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function (res) {
            console.log(res)
          }
        })
      }
    })
  }
})
