import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: {
      icon: "HomeFilled",
    },
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "首页",
        meta: {
          icon: "home",
        },
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/sys",
    name: "系统管理",
    meta: {
      icon: "Setting",
    },
    component: Layout,
    redirect: "/sys/user",
    children: [
      {
        path: "/sys/user",
        name: "用户管理",
        meta: {
          icon: "User",
        },
        component: () => import("@/views/sys/user/index.vue"),
      },
    ],
  },
  {
    path: "/article",
    name: "文章管理",
    meta: {
      icon: "UserFilled",
    },
    component: Layout,
    redirect: "article/all",
    children: [
      {
        path: "/article/all",
        name: "全部文章",
        meta: {
          icon: "avatar",
        },
        component: () => import("@/views/articles/AllArticles.vue"),
      },
      {
        path: "/article/me",
        name: "我的文章",
        meta: {
          icon: "avatar",
        },
        component: () => import("@/views/articles/MyArticles.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route;
      if (name) {
        router.hasRoute(name) && router.removeRoute(name);
      }
    });
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload();
  }
}

export default router;
