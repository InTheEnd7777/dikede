// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from "axios";
import { Message } from "element-ui";
import store from "@/store" 
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers.Authorization = store.state.user.token;
  }
  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    console.log(res);
    if (res.config.responseType === "blob") {
      // console.log(res);
      return res;
    }
    const { success, msg } = res.data;
    if (success) {
      return res.data;
    }
    Message.error(msg);
    return Promise.reject(new Error(msg));
  },
  function (error) {
    Message.error("系统异常");
    return Promise.reject(error);
  }
); // 响应拦截器

export default service; // 导出axios实例
