// pages/equipmentList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollHeight: 400,
        searchType: [
            { name: '待盘点', value: 0 },
            { name: '已盘点', value: 1 },
            { name: '全部', value: 2, checked: true }
        ],
        selectType: 2,
        listData: [],
        noSweepList: [],
        sweepList: []


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.handleData();
        this.getHeight();
    },
    /**
     * 处理待盘点，已盘点，全部数据
     */
    handleData() {
        var data = [
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "0" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "0" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "0" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "0" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "0" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "0" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "1" },
            { "code": "0405310001", "name": "双针平车", "batch": "重机DDL-8700-7", "status": "0" }
        ];
        //未盘点
        var noSweepList = [];
        //已盘点
        var sweepList = [];
        for (var item of data) {
            if (item.status == 0) {
                noSweepList.push(item)
            } else {
                sweepList.push(item)
            }
        }
        this.setData({ sweepList: sweepList })
        this.setData({ noSweepList: noSweepList })
    },
    getHeight: function() {
        var that = this
            //设置data数据
        wx.getSystemInfo({
            success: function(res) {
                var windowHeight = res.windowHeight;
                let query = wx.createSelectorQuery().in(that);
                query.select('.searchContainer').boundingClientRect();
                query.exec((res) => {
                    // 分别取出navbar和header的高度
                    let navbarHeight = res[0].height;
                    // 然后就是做个减法
                    let scrollViewHeight = windowHeight - navbarHeight - 125;
                    // 算出来之后存到data对象里面
                    that.setData({
                        scrollHeight: scrollViewHeight
                    });
                });

            }
        });
    },
    /**
     * 选择待盘点，已盘点，全部
     */
    radioChange: function(e) {
        this.setData({ selectType: e.detail.value })
        console.log(e.detail.value)
    },
    /**
     * 盘点扫码
     */
    scan: function() {

        var that = this;
        wx.scanCode({
            success: (res) => {
                console.log("扫码结果");
                console.log(res);

            },
            fail: (res) => {
                console.log(res);
            }
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

    },

})