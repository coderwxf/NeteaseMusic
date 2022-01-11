import { BASE_URL } from './consts'

class Api {
  request(path, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + path,
        method: method || 'get',
        data: params || {},
        success: resolve,
        fail: reject
      })
    })
  }

  get(path, query) {
    return this.request(path, 'get', query)
  }

  post(path, params) {
    return this.request(path, 'post', params)
  }
}

export default new Api()