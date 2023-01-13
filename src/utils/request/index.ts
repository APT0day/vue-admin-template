import axios from "axios";
import { settings } from "@/settings";
import { ElMessage } from "element-plus";
import Cookie from "js-cookie";

const errorCreate = (msg: string) => {
  const err = new Error(msg);
  errorLog(err);
  throw err;
};

const errorLog = (err: Error) => {};

// 创建一个 axios 实例
const service = axios.create({
  // 在请求地址前面加上 baseURL
  baseURL: settings.apiBaseURL,
  // 请求超时时间
  timeout: 60000,
  // 当发送跨域请求时允许携带 cookie
  withCredentials: true,
});

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    // 在请求发送之前做一些处理
    const token = Cookie.get("token");
    // 让每个请求携带token-- ['X-ACCESS-TOKEN']为自定义key 请根据实际情况自行修改
    config.headers = config.headers || {};
    config.headers!["X-ACCESS-TOKEN"] = token;

    return config;
  },
  (err) => {
    // 请求错误的统一处理
    return Promise.reject(err);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // res 是 axios 返回数据中的 data
    const res = response.data;
    // 后端约定的状态码
    const { status, info, data } = res;
    if (status === undefined) {
      // 如果没有 status 代表这不是项目后端开发的接口
      errorCreate(`接口数据无法解析:${res}`);
    } else {
      switch (status) {
        case -2:
          ElMessage({
            message: info,
            type: "warning",
            duration: settings.modalDuration,
          });
          return Promise.reject(data);
        case -1:
          ElMessage({
            message: info,
            type: "warning",
            duration: settings.modalDuration,
          });
          return Promise.reject(data);
        case 0:
          ElMessage({
            message: info,
            type: "warning",
          });
          return Promise.reject(data);
        case 1:
          // [ 示例 ] status === 1 代表没有错误
          return data;
        default:
          // 不是正确的 code
          errorCreate(`${res.info}: ${response.config.url}`);
          break;
      }
    }
    console.log(res);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
