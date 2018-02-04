import { Config } from './config.js';

class Base {
  constructor() {
    this.baseRequestCrmUrl = Config.crmUrl;
    this.baseRequestExamUrl = Config.examUrl;
    this.Url=Config.Url;
    this.testUrl=Config.testUrl;
  }
  request(params) {
    var url = this.testUrl+params.url;
    if (!params.type) {
      params.type = "GET";
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        params.sCallback && params.sCallback(res.data);
      },
      fail: function (err) {
        console.log(err);
      },
    })
  }
}

export { Base };