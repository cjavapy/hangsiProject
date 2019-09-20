// pages/home/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isInInventory: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
        this.setData({
            isInInventory: app.globalData.isInInventory
        })

    },
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    toRepair: function() {
        // wx.navigateTo({
        //     url: '/pages/repairRecord/index',
        //     success: function(res) {},
        //     fail: function(res) {},
        //     complete: function(res) {},
        // })
        wx.switchTab({
            url: "/pages/repairRecord/index/index"
        })

    },
    toLend: function() {
        wx.switchTab({
            url: "/pages/lendRecord/index/index"
        })
    },

    toEquipmentList: function() {
        // wx.navigateTo({
        //     url: '/pages/equipmentList/index',
        //     success: function(res) {},
        //     fail: function(res) {},
        //     complete: function(res) {},
        // })
        wx.switchTab({
            url: "/pages/equipmentList/index"
        })
    },

    /**
     * 跳转到设备列表
     */
    toMachList: function() {
        wx.navigateTo({
            url: '/pages/machList/index/index',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
     * 开始盘点
     */
    startInventory: function() {
        this.setData({ isInInventory: true })
        app.globalData.isInInventory = true
    },
    /**
     * 结束盘点
     */
    endInventory: function() {
        this.setData({ isInInventory: false })
        app.globalData.isInInventory = false
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
        this.setData({
            isInInventory: app.globalData.isInInventory
        })
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