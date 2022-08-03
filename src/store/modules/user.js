import { login, getinfolist } from "@/api/user";
// import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    token: "",
    userId: "",
    infolist: {},
  },
  mutations: {
    settoken(state, payload) {
      state.token = payload;
    },
    setinfouserId(state, payload) {
      state.userId = payload;
    },
  },
  actions: {
    async gettoken(context, payload) {
      const res = await login(
        payload.mobile,
        payload.password,
        payload.code,
        payload.clientToken,
        payload.loginType
      );
      console.log(res)
      console.log(res.userId)
      context.commit("settoken", res.token);
      context.commit("setinfouserId", res.userId);
    },
    //获取用户信息
    async getinfolist(context, payload) {
      const res = await getinfolist(payload)
      console.log(res);
    },
  },
};
