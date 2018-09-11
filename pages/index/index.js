// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls:[
        '/static/imgs/index_1.jpeg',
        '/static/imgs/index_2.jpeg',
        '/static/imgs/index_3.jpeg'

      ],
      indicatorDots:true,
      autoplay:true,
      introduction:{
        title : "北京理工大学珠海学院",
        subtitle : "德以明理 学以精工",
        content : "  北京理工大学珠海学院是经中华人民共和国教育部批准，于2004年5月8日正式成立的普通高等学校。\n  学校坐落在美丽的珠海市唐家湾，京港澳高速公路、广东西部沿海高速公路从学校的东北两侧通过，学校东门面对广珠城轨唐家湾站，50分钟往返珠海与广州，交通十分便利。校园内20万平方米的人工湖波光涟漪，绿化环境达校区总面积80%以上，绿树成荫，鸟语花香，浅潭碧水点缀其中，宁静、典雅，是莘莘学子学习生活的理想之地。\n  学校内有着众多小吃店铺，可以在当前页面地图导航查看。"
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底事件的处理函数')
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('用户点击右上角分享')
  }
})