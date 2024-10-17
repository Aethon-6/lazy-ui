import { POST, GET } from "@/utils/http";

import type { UserRequest } from "../types/user.d";

// 测试使用
export function UserList(data: UserRequest) {
  return GET("/sys/user/list", data); //测试接口
}
