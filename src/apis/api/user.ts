import { POST } from "@/utils/http";

import type { UserRequest } from "../types/user.d";

// 测试使用
export function userRequest(data: UserRequest) {
  return POST("/query/users", data); //测试接口
}
