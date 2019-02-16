// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'About',
    userInfo: {
      nickName: '汪磊(iceStone)',
      avatarUrl: '../../images/qrcode.png'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    console.log("测试")
  }
})
