// 路由配置
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 首页
import HomeView from "@/view/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
