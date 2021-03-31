import Cookies from 'js-cookie'

const accessToken = 'accessToken'
const refreshToken = 'refreshToken'

export function getToken() {
  return Cookies.get(accessToken)
}

export function setToken(token,expires) {
  let time=new Date(new Date().getTime() +expires);
  return Cookies.set(accessToken, token,{expires: time})
}

export function removeToken() {
  return Cookies.remove(accessToken)
}

export function getRefreshToken() {
  return Cookies.get(refreshToken)
}

export function setRefreshToken(token,expires) {
  return Cookies.set(refreshToken, token)
}

export function removeRefreshToken() {
  return Cookies.remove(refreshToken)
}
