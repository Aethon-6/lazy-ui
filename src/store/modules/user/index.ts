import { ref } from "vue";
import { defineStore } from "pinia";
import { loginApi, loginCodeApi } from "@/api/login/index";
import { getUserInfoApi } from "@/api/user/index";
import { type LoginRequestData } from "@/api/login/types/login";
import { getToken, removeToken, setToken } from "@/utils/cache/cookies";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "");
  const userName = ref<string>("");

  /** 登录 */
  const login = async ({
    loginName,
    password,
    code,
    validateCodeKey,
  }: LoginRequestData) => {
    const { data } = await loginApi({
      loginName,
      password,
      code,
      validateCodeKey,
    });
    setToken(data.accessToken);
    token.value = data.accessToken;
  };

  const loginCode = async () => {
    const { data } = await loginCodeApi();
  };

  const getUserInfo = async () => {
    const { data } = await getUserInfoApi();
    userName.value = data.userName;
  };

  return { userName, login, getUserInfo };
});
