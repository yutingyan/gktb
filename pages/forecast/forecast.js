let app = getApp();
Page({
  data: {
    score: "620",
    subject:"21"
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
  /*  let { score, subject } = e.detail.value;
    if (!score) {
      this.setData({
        warn: "分数为空！",
      })
      return;
    }
    this.setData({
      score ,
      subject
    })
*/
    var that = this;
    var formData = e.detail.value; //获取表单所有input的值  
    wx.request({
      url: 'http://127.0.0.1:8080/gktbserver/forecastSchool',
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
       // console.log(res.data)
        var that = res.data
        wx.navigateTo({
          url: 'schoolList/schoolList?schoolDatas=' + JSON.stringify(that) 
        })
      }
    })

  }
})