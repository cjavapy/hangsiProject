// pages/lendRecord/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scanFunctionIsUseAble: true,
        scrollHeight: 600,
        machList: [{
            imgSrc: "../../../images/frj.jpg",
            machType: "双针平车",
            machCode: "040531001",
            department: "锦业",
            repairDate: "2019-09-12",
            dec: "报修说明"
        }, {
            imgSrc: "",
            machType: "双针平车",
            machCode: "040531001",
            department: "锦业",
            repairDate: "2019-09-12",
            dec: "报修说明"
        }, {
            imgSrc: "",
            machType: "双针平车",
            machCode: "040531001",
            department: "锦业",
            repairDate: "2019-09-12",
            dec: "报修说明报修说明报修说明报修说明报修说明报修说明报修说明报修说明报修说明"
        }, {
            imgSrc: "",
            machType: "双针平车",
            machCode: "040531001",
            department: "锦业",
            repairDate: "2019-09-12",
            dec: "报修说明"
        }],
        startDate: "",
        endDate: "",
        searchType: [
            { name: '借出', value: '0', checked: true },
            { name: '归还', value: '1' }
        ]
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
        wx.getSystemInfo({
            success: function(res) {
                var windowHeight = res.windowHeight;
                let query = wx.createSelectorQuery().in(that);
                query.select('.searchContainer').boundingClientRect();
                query.exec((res) => {
                    // 分别取出navbar和header的高度
                    let navbarHeight = res[0].height;
                    // 然后就是做个减法
                    let scrollViewHeight = windowHeight - navbarHeight - 60;
                    // 算出来之后存到data对象里面
                    that.setData({
                        scrollHeight: scrollViewHeight
                    });
                });

            }
        });
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
                list.push(fileCode);
                this.setData({
                    array: list
                })
                this.getHeight();
            }
        }

    },
    bindStartDateChange: function(e) {
        //设置事件
        this.setData({
            //给当前time进行赋值
            startDate: e.detail.value
        })
    },
    bindEndDateChange: function(e) {
        //设置事件
        this.setData({
            //给当前time进行赋值
            endDate: e.detail.value
        })
    },
    toDetail: function(e) {
        var that = this;
        var index = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: '/pages/lendRecord/lendDetail/index',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
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