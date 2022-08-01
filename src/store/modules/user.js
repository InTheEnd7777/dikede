import { login } from "@/api/user";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    token: "",
  },
  mutations: {
    settoken(state, payload) {
      state.token = payload;
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
      if (res.data.success) {
        context.commit("settoken", res.data.token);
        Message('登录成功')
      } else {
        Message(res.data.msg)
      }
    },
  },
};
