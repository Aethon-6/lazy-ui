import { GET } from "@/utils/request";
import { request } from "@/utils/service";
import type * as User from "./types/user";

// export function getUserInfoApi() {
//   return GET<User.UserInfoResponseData>("sys/user/query");
// }

export function getUserInfoApi() {
  return request<User.UserInfoResponseData>({
    url: "sys/user/query",
    method: "get",
  });
}
