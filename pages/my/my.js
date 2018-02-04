import { Base } from '../../utils/base.js';
Page({
    data: {
        txtOrderCode: 0.1,
    },
    pay: function () {
        var ordercode = this.data.txtOrderCode;
        wx.login({
            success: function (res) {
                if (res.code) {
                    wx.request({
                        url: 'http://crm.oc.com/api/v1/token/user',
                        data: {
                            code: res.code,//要去换取openid的登录凭证
                            ordercode: ordercode
                        },
                        method: 'POST',
                        success: function (res) {
                            wx.requestPayment({
                                timeStamp: '2490840662',
                                nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
                                package: '',
                                signType: 'MD5',
                                paySign: ' ',
                                success: function (res) {
                                    // success
                                    console.log(res);
                                },
                                fail: function (res) {
                                    // fail
                                    console.log(res);
                                    console.log("error");
                                },
                                complete: function (res) {
                                    // complete
                                    console.log("complete");
                                    console.log(res);
                                }
                            })
                        }
                    })
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    },
    getOrderCode: function (event) {
        this.setData({
            txtOrderCode: event.detail.value
        });
    },
})