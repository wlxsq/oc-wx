// pages/news/news.js
import { News } from "news-model.js";
var news = new News();
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

  _loadData: function () {
    news.getAllNewsData((res) => {
      this.setData({
        'newsArr': res
      })
    })
  },

  ontap(event){
    let newsID = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'news-detail/news-detail?id='+newsID,
    })
  },

  onSwiper(event){
    let newsID = event.target.dataset.id;
    wx.navigateTo({
      url: 'news-detail/news-detail?id='+newsID,
    })
  }
})