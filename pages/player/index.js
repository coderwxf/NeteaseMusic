import { fetchTopMv } from '../../api/player'

Page({
  data: {
    topMvs: []
  },

  async onLoad() {
    const { data: { data } } = await fetchTopMv()
    
    this.setData({
      topMvs: data
    })
  }
})