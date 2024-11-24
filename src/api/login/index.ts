import { request } from "@/utils/service";
import type * as Login from "./types/login";

/** 获取登录验证码 */
export function loginCodeApi() {
  return request<Login.LoginCodeResponseData>({
    url: "auth/query/code",
    method: "get",
  });
}
/** 登录 */
export function loginApi(data: Login.LoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "auth/login",
    method: "post",
    data,
  });
}
/** 退出 */
export function logoutApi() {
  return request<Login.LoginResponseData>({
    url: "auth/logout",
    method: "post",
  });
}
