// pages/index/index.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data:{
  },
 
  onLoad: function () {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
          key: '5NLBZ-SXSKV-T2MPS-UMOFV-JC5Z5-7VFY7'
      });
      
  },
  onShow: function () {
    // 调用接口
    qqmapsdk.search({
        keyword: '酒店',
        success: function (res) {
            console.log(res);
        },
        fail: function (res) {
            console.log(res);
        },
    complete: function (res) {
        console.log(res);
    }

    })
  },
  onReady: function(e){
    this.mapCtx = wx.createMapContext('zhbitMap');
    this.moveToLocation();
  },
  moveToLocation: function(){
    this.mapCtx.moveToLocation();
  },
  goToPerson: function(){
    let url = '/pages/person/person';
    wx.navigateTo({url});
  },

})
