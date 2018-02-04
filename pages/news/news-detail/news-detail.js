// pages/news/news-detail/news-detail.js

import { NewsDetail } from './news-detail-model.js';
var newsDetail = new NewsDetail();

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
    let dataID = options.id;
    this.data.dataID = dataID;
    this._loadData();
  },

  _loadData:function(){
    newsDetail.getNewsDataByID(this.data.dataID, (res) => {
      this.setData({
        'newsDetailArr': res
      })
    })
  }
})