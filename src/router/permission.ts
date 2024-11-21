import router from "@/router";
import { getToken } from "@/utils/cache/cookies";
import { type RouteLocationNormalized } from "vue-router";
import { useUserStore } from "@/store/modules/user/index";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

/** 免登录白名单（匹配路由 path） */
const whiteListByPath: string[] = ["/login"];
/** 免登录白名单（匹配路由 name） */
const whiteListByName: string[] = [];

router.beforeEach(async (to, _from, next) => {
  NProgress.start();

  const token = getToken();

  // 如果没有登录
  if (!token) {
    // 如果在免登录的白名单中，则直接进入
    if (isWhiteList(to)) return next();
    // 其他没有访问权限的页面将被重定向到登录页面
    return next("/login");
  }

  // 如果已经登录，并准备进入 Login 页面，则重定向到主页
  if (to.path === "/login") {
    return next({ path: "/" });
  }

  try {
    await useUserStore().getUserInfo();
  } catch (err: any) {}

  // 默认情况继续导航
  return next();
});

/** 判断是否在白名单 */
const isWhiteList = (to: RouteLocationNormalized) => {
  // path 和 name 任意一个匹配上即可
  return (
    whiteListByPath.indexOf(to.path) !== -1 ||
    whiteListByName.indexOf(to.name as any) !== -1
  );
};

router.afterEach((to) => {
  NProgress.done();
});
