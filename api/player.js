import api from '../lib/api'

export function fetchTopMv(offset = 0, limit = 10) {
  return api.get('/top/mv', {
    offset,
    limit
  })
}