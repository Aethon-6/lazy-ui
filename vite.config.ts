import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
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
    // 配置代理
    proxy: {
      "/api": {
        // 设置代理目标
        target: "http://localhost:9000",
        changeOrigin: true,
        // 将/api 替换成空字符串
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
