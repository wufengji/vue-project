import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function refreshToken(data) {
  return request({
    url: '/admin/refreshToken',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/admin/getInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/admin/loginOut',
    method: 'post'
  })
}
