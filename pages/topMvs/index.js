import { fetchTopMv } from '../../api/player'

Page({
  data: {
    topMvs: []
  },

  async onLoad() {
    const { data } = await fetchTopMv()
    
    this.setData({
      topMvs: data
    })
  }
})