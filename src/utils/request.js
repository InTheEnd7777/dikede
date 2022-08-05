// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { gettokentime } from "@/utils/auth";
import router from "@/router";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // timeout: 5000,
});
const istime = function () {
  const currentTime = Date.now();
  //登录的时间
  const tokenTime = gettokentime();
  //token的保质期
  const timeout = 2 * 60 * 60 * 1000;
  return currentTime - tokenTime > timeout;
};
// 创建一个axios的实例
service.interceptors.request.use(async (config) => {
  if (store.state.user.token) {
    if (istime()) {
      // console.log('token过期')
      await store.dispatch("user/removeall");
      router.push("/login");
      return Promise.reject(new Error("登录过期"));
    } else {
      config.headers.Authorization = store.state.user.token;
    }
  }
  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    // console.log(res);
    if (res.config.responseType === "blob") {
      // console.log(res);
      return res;
    }

    if (res.data.success) {
      const { success, msg } = res.data;
      if (success) {
        return res.data;
      }
      Message.error(msg);
      return Promise.reject(new Error(msg));
    }
    return res;
  },
  function (error) {
    // console.log(error);
    // Message.error("系统异常");
    // return Promise.reject(error);
    //登录过期为401
    if (error?.response?.status === 401) {
      Message.error("登录过期");
    } else {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
); // 响应拦截器

export default service; // 导出axios实例
