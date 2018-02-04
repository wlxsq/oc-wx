// pages/libs/libs/libs.js
import {Lib} from './libs-model.js';
var libs = new Lib();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },

  _loadData:function(){
    
  },
  singleTo:function(e){
    wx.navigateTo({
      url: '../../single/single',
    })
  }
})