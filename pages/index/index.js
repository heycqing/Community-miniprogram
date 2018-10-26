// pages/index/index.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data:{
    'scale':17,
    'enable-zoom':true,
    'enable-scroll': true,
    'markers':[{
        iconPath: "/static/building/icon-11.png",
        id: 0,
        latitude: 22.364010,
        longitude: 113.550610,
        width: 28,
        height: 28
    },
    {
        iconPath: "/static/building/icon-11.png",
        id: 1,
        latitude: 22.357059,
        longitude: 113.546768,
        width: 28,
        height: 28   
    },{
        iconPath: "/static/building/icon-11.png",
        id: 2,
        latitude: 22.366520,
        longitude: 113.549370,
        width: 28,
        height: 28
    }]
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
    // this.moveToLocation();
  },
  // 定位到当前位置;   
  moveToLocation: function(){
    this.mapCtx.moveToLocation({
        latitude: '22.363250',
        longitude: '113.542300'
    });
  },
  goToPerson: function(){
    let url = '/pages/person/person';
    wx.navigateTo({url});
  },

})
