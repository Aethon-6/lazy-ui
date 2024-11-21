// 配置axios
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ElMessage } from "element-plus";

/** 退出登录并强制刷新页面（会重定向到登录页） */
function logout() {
  location.reload();
}
// 创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string, //设置API的基础URL
  timeout: 3000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    //  获取请求头
    const headers = config.headers || {};
    // 向请求头添加token
    //headers["Authorization"] = "token";
    config.headers = headers;
    return config;
  },
  (error: AxiosError) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据进行处理
    const apiData = response.data;

    debugger
    // 这个 code 是和后端约定的业务 code
    const code = apiData.code;

    switch (code) {
      case 200:
        // 本系统采用 code === 0 来表示没有业务错误
        return apiData;
      case 401:
        // Token 过期时
        return logout();
      default:
        // 不是正确的 code
        ElMessage.error(apiData.msg || "Error");
        return Promise.reject(new Error("Error"));
    }

    // if (res.code != "200") {
    //   ElMessage.error(res.msg);
    // }
    // return res;
  },
  (error: AxiosError) => {
    // 处理响应错误
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

// 导出axios请求方法
// GET
export function GET<T>(url: string, params?: any) {
  return instance.get<T>(url, { params });
}
// POST
export function POST<T>(url: string, data?: any) {
  return instance.post<T>(url, data);
}
// PUT
export function PUT<T>(url: string, data?: any) {
  return instance.put<T>(url, data);
}
//Delete
export function Delete<T>(url: string) {
  return instance.delete<T>(url);
}
