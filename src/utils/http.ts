// 配置axios
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// 创建axios实例
const instance = axios.create({
  baseURL: "/api", //设置API的基础URL
  timeout: 3000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    //  获取请求头
    const headers = config.headers || {};
    // 向请求头添加token
    headers["Authorization"] = "token";
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
    return response;
  },
  (error: AxiosError) => {
    // 处理响应错误
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
