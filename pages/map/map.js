// map.js
Page({
    data: {
    },
    ontap: function () {
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                console.log(res);
                var longitude = res.longitude;
                var latitude = res.latitude;
            }
        });
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    }

})