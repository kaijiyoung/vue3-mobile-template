# Vue3.2 + Vite2.0 + Vant3.0 + Pinia2.0 + Router4.0 + eruda2.0 + ES6

- 基础移动端 vue3 vant ui 模板，这是一个学习vue3的项目

- 喜欢就点个star吧，一起学习一起成长

## 项目结构

```shell
|-public                               # 静态资源
|   |-favicon.ico                      # favicon图标
|-src
|   |-api                              # 数据接口
|   |-assets                           # 图片等静态资源
|   |-components                       # 公共组件
|   |-axios                            # 请求配置
|   |-router                           # 路由配置
|   |-vant                             # vant ui配置
|   |-store                            # 状态管理
|   |   |-modules
|   |   |   |-user.js                  # 子模块
|   |   |-index.js                     # 入口
|   |   |-pinia.js                     # 注册pinia
|   |-utils
|   |   |-eruda.js                     # 移动端调试工具
|   |   |-viewport.js                  # 自适应方案
|   |-views                            # 页面
|   |   |-home                         # 主页
|   |   |-xxxxxx                       # 其它页面
|   |-App.vue                          # 入口页面
|   |-main.js                          # 入口js
|   |-global.less                      # 全局样式
|-.env.development                     # 开发环境配置
|-.env.production                      # 生产环境配置
|-.env.test                            # 测试环境配置
|-.gitignore                           # git忽略列表
|-vite.config.js                       # 构建相关配置
|-package.json                         # 依赖
|-index.html                           # 静态模板
|-yarn.lock                            # 锁定版本

```

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
