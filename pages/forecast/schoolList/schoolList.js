
Page({
  data: {
    schoolDatas: [
      { "schoolCode": "01", "schoolName": "text1", "sugTypes": "type1" },
      { "schoolCode": "01", "schoolName": "text1", "sugTypes": "type1" }
      ]
  },
  onLoad: function (options) {
    var that = this
    console.log(that.data)
    var queryBean = JSON.parse(options.schoolDatas);
    console.log(queryBean)
    that.setData({
      schoolDatas: queryBean
    })
    console.log(that.data.schoolDatas)
  },
})