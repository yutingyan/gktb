let app = getApp();
Page({
  data: {
    score: "620",
    subject:"1"
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let { score, subject } = e.detail.value;
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
  }
})