import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue()],
    resolve: {
      // 导入以下文件可以不用后缀名
      extensions: [".vue", ".ts"],
      // 配置路径别名
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      // 允许访问的 IP
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      // 配置代理
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 设置代理目标
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          // 将/api 替换成空字符串
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
  };
});
