import { GET, POST } from "@/utils/request";
import { request } from "@/utils/service";
import type * as Login from "./types/login";

/** 获取登录验证码 */
// export function loginCodeApi() {
//   return GET<Login.LoginCodeResponseData>("auth/query/code");
// }

export function loginCodeApi() {
  return request<Login.LoginCodeResponseData>({
    url: "auth/query/code",
    method: "get",
  });
}

// export function loginApi(data: Login.LoginRequestData) {
//   return POST<Login.LoginResponseData>("auth/login", data);
// }

export function loginApi(data: Login.LoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "auth/login",
    method: "post",
    data,
  });
}
