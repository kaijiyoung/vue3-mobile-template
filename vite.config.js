import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 路径查找
const pathResolve = (dir) => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APP_PREFIX } = loadEnv(mode, process.cwd())
  return {
    host: true,
    plugins: [vue()],
    base: VITE_APP_PREFIX || '/',
    resolve: {
      // 设置别名
      alias: {
        '@': pathResolve('src'),
      },
      extensions: ['.vue', '.js']
    },
    // 服务端渲染
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 8000,
      host: "0.0.0.0",
      // 本地跨域代理
      proxy: {},
      open: true
    },
  }
})
