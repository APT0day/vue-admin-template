import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { getToken } from "@/utils/auth";

// 创建 router 实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const whiteList = ['login'] // 白名单

router.beforeEach((to, from, next) => {
    const token = getToken()

    if(token) {
        if(to.name === 'login') {
            next({ name: 'dashboard-console'})
        }else {
            next()
        }
    }else {
        if (whiteList.includes(to.name as string)) {
            // 在白名单内，直接进入
            next()
          } else {
            next({ path: '/login', query: {}, replace: true })
          }
    }
    
})

export const initRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;
