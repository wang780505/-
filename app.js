App({
  globalData: {
    userInfo: null
  },

  // 检查登录状态
  checkLogin() {
    const userInfo = wx.getStorageSync('userInfo')
    return !!userInfo
  },

  // 获取当前登录用户信息
  getUserInfo() {
    return wx.getStorageSync('userInfo') || this.globalData.userInfo
  },

  // 保存用户信息
  setUserInfo(userInfo) {
    this.globalData.userInfo = userInfo
    wx.setStorageSync('userInfo', userInfo)
  },

  // 退出登录
  logout() {
    this.globalData.userInfo = null
    wx.removeStorageSync('userInfo')
    wx.reLaunch({
      url: '/pages/login/login'
    })
  },

  onLaunch() {
    // 初始化云开发（改成你自己的云环境ID）
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'cloud1-d8grdtfuo916ce548', // 你的云环境ID
        traceUser: true
      })
    }
  }
})