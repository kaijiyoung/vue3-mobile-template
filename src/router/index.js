/**
 * 路由配置
 */
import { createRouter, createWebHistory } from 'vue-router';

// 静态路由
const routes = [
  {
    path: '/',
    component: () => import('@/views/home/home'),
    meta: {title: '主页'}
  }
];

const router = createRouter({
  base: import.meta.env.VITE_APP_PREFIX,
  history: createWebHistory(),
  routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to && to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});

export default router;
