import { login, getinfolist } from "@/api/user";
// import { Message } from "element-ui";
import { settokentime } from "@/utils/auth";

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
    setinfolist(state, payload) {
      state.infolist = payload;
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
      // console.log(res)
      // console.log(res.userId)
      context.commit("settoken", res.token);
      context.commit("setinfouserId", res.userId);
      settokentime();
    },
    //获取用户信息
    async getinfolist(context, payload) {
      const id = context.state.userId;
      // console.log(id);
      // console.log(payload);
      const { data } = await getinfolist(id);
      context.commit("setinfolist", data);
      // console.log(infolist);
    },
    //退出
    removeall(context) {
      // console.log(111);

      context.commit("setinfolist", {});
      context.commit("settoken", "");
      context.commit("setinfouserId", "");
    },
  },
};
