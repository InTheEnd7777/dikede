import request from "@/utils/request";

export function getcode(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
}
/**
 *
 * @param {string} loginName  用户名
 * @param {string} password 密码
 * @param {string} code 验证码
 * @param {string} clientToken 客户端请求验证码的token，两个后台登录需要提供
 * @param {integer} loginType 登录类型 0：后台；1：运营运维端；2：合作商后台
 * @returns
 */
export function login(loginName, password, code, clientToken, loginType) {
  return request({
    url: "/api/user-service/user/login",
    method: "POST",
    data: {
      loginName,
      password,
      code,
      clientToken,
      loginType,
    },
  });
}
