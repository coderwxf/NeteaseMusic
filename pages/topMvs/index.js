import { fetchTopMv } from '../../api/player'

Page({
  data: {
    topMvs: [],
    hasMore: true
  },

  onLoad() {
    this.getTopMv()
  },

  async getTopMv(offset = 0) {
    if (!this.data.hasMore) return
    
    const { data, hasMore } = await fetchTopMv(offset)

    this.setData({
      topMvs: offset === 0 ? data : [...this.data.topMvs, ...data],
      hasMore
    })

    wx.stopPullDownRefresh()
  },
  
  goDetail(e) {
    const { id } = e.currentTarget.dataset
    
    wx.navigateTo({
      url: `/pages/mvDetail/index?id=${id}`
    })
  },

  // 上拉刷新界面 --- 重新展示最新的10条数据
  onPullDownRefresh() {
    this.getTopMv()
  },

  onReachBottom() {
    this.getTopMv(this.data.topMvs.length)
  }
})