Page({
  data: {
    id: 0
  },

  onLoad(option) {
    const { id } = option

    this.setData({
      id
    })
  }
})