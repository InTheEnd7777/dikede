import Cookies from "js-cookie";

const TokenKey = "vue_admin_template_token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
//存储登录时间
export function settokentime() {
  Cookies.set('timetoken', Date.now())
}
//获取登录时间
export function gettokentime() {
  return Cookies.get("timetoken");
}
