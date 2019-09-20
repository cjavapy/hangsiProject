// pages/machList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollHeight: 400,
        selectIndex: 0,
        selectPartId: "",
        selectPartName: "",
        machList: [{
            imgSrc: "../../../images/frj.jpg",
            machType: "双针平车",
            machCode: "040531001",
            batch: "重机DDL-8700-7",
            lendDate: "2019-09-12",
            department: "锦业1"
        }, {
            imgSrc: "",
            machType: "双针平车",
            machCode: "040531001",
            batch: "重机DDL-8700-7",
            lendDate: "2019-09-12",
            department: "锦业2"
        }, {
            imgSrc: "../../../images/frj.jpg",
            machType: "双针平车",
            machCode: "040531001",
            batch: "重机DDL-8700-7",
            department: "锦业3"
        }, {
            imgSrc: "../../../images/frj.jpg",
            machType: "双针平车",
            machCode: "040531001",
            batch: "重机DDL-8700-7",
            lendDate: "2019-09-12",
            department: "锦业4"
        }],
        showRepairModal: false,
        showLendModal: false,
        isShowDel: false,
        repairInfo: "",
        lendInfo: {},
        selectArray: [{
            "id": "0",
            "value": "部门1"
        }, {
            "id": "1",
            "value": "部门2"
        }]


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
                query.select('.btnGroup').boundingClientRect();
                query.exec((res) => {
                    // 分别取出navbar和header的高度
                    let navbarHeight = res[0].height;


                    // 然后就是做个减法
                    let scrollViewHeight = windowHeight - navbarHeight - 65;
                    // 算出来之后存到data对象里面
                    that.setData({
                        scrollHeight: scrollViewHeight
                    });
                });

            }
        });
    },
    /**
     * 选择机器
     */
    selectList: function(e) {
        let clickIndex = e.currentTarget.dataset['index'];
        this.setData({ selectIndex: clickIndex })
    },
    /**
     * 扫码
     */
    continueScan: function() {
        wx.navigateTo({
            url: '/pages/continuousScan/index',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
     * 选择部门
     */
    pickChange(e) {
        this.setData({ selectPartId: e.detail.value });
        var selectPart = this.data.selectArray.find(item => { return item.id == e.detail.value })
        this.setData({ selectPartName: selectPart.value });
    },
    /**
     * 删除模态框
     */

    delMach() {
        this.setData({ isShowDel: true });
    },
    confirmDel() {
        console.log(this.data.selectIndex)
    },
    /**
     * 报修/维修模态框显示
     */
    repair: function() {
        this.setData({ showRepairModal: true })
    },
    /**
     * 报修原因/维修结果结果提交
     */
    repairModalConfirm: function() {
        //request
        console.log(this.data.repairInfo)
    },
    /**
     * 借出模态框显示
     */
    lend: function() {
        this.setData({ showLendModal: true })
    },
    /**
     * 报修原因/维修结果
     */
    repairInput: function(e) {
        this.setData({ repairInfo: e.detail.value })
    },
    /**
     * 模态框取消
     */
    modalCancel: function() {
        this.setData({ repairInfo: "" });
        this.setData({ lendInfo: "" })
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

    }
})