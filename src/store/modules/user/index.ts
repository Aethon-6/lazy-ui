import { ref } from "vue";
import store from "@/store";
import { defineStore } from "pinia";
import { loginApi, logoutApi } from "@/api/login/index";
import { getUserInfoApi } from "@/api/user/index";
import { type LoginRequestData } from "@/api/login/types/login";
import { getToken, removeToken, setToken } from "@/utils/cache/cookies";
import { resetRouter } from "@/router/index";
import { ElMessage } from "element-plus";

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
  const logout = () => {
    logoutApi()
      .then((res) => {
        if (res.code) {
          removeToken();
          token.value = "";
          resetRouter();
          location.reload();
        } else {
          ElMessage.error(res.msg);
        }
      })
      .catch((err) => {
        ElMessage.error(err);
      });
  };

  const getUserInfo = async () => {
    const { data } = await getUserInfoApi();
    userName.value = data.userName;
  };

  return { userName, login, logout, getUserInfo };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}
