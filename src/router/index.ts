import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes from './routes'

// 创建 router 实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const initRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;
