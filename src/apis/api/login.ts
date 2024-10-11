import { POST } from "@/utils/http";

import { LoginRequest } from "../types/login";

// 测试使用
export function login(data: LoginRequest) {
  return POST("/auth/login", data); //测试接口
}
