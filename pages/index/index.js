// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // subkey:'5NLBZ-SXSKV-T2MPS-UMOPF-JC5Z5-7VFY7',

    markers:[{
      id:0,
      iconPath:"/static/map_imgs/icon/icon_0.png",
      longitude:113.542300,
      latitude:22.363250,
      width:40,
      height:40,
      title: "篮球场"
    }]
  },
  changeMark: function(e){
  
    let markerId = e.markerId;
    let iconpath = this.data.markers[markerId].iconPath;
    console.log('1.\ticonPath:\t'+iconpath)
    var str = "markers["+markerId+"].iconPath";
    console.log('str:\t'+str)
    if(iconpath === this.data.markers[markerId].iconPath){
 
      this.setData({
  
        str: "/static/map_imgs/icon/icon_0_out.png"
     
      })
     console.log(this.data.markers[markerId].iconPath)
    console.log('2.\ticonPath:\t'+this.data.markers[markerId].iconPath)
      
    }else{
      console.log('here')
    }
    
   
  },

  
})