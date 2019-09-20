// pages/continuousScan/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scanFunctionIsUseAble: true,
        array: ['00000', '11111', '222222', '3333333', '44444444', '5555555', '66666666', '777777', '88888888', '999999999'],
        scanInfo: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getHeight();
    },
    getHeight: function() {
        var that = this
            //设置data数据
        that.setData({
            scrollTop: that.data.array.length * 1000
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },
    takeCode(e) {
        if (this.data.scanFunctionIsUseAble) {
            console.log("开始扫码了: ");
            // this.setData({
            //   scanFunctionIsUseAble: false
            // })
            console.log("e: " + e);
            var fileCode = e.detail.result;
            console.log("fileCode: " + fileCode);
            var list = this.data.array;
            if (list.indexOf(fileCode) == -1) {
                console.log(fileCode);
                this.setData({ scanInfo: fileCode })
                    // list.push(fileCode);
                    // this.setData({
                    //     array: list
                    // })
                this.getHeight();
            }
        }

    },
    error(e) {
        console.log(e);
    },
    //返回
    goBack() {
        wx.navigateBack({});
    },
    // 确认扫描的机器
    makeSure() {

    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})