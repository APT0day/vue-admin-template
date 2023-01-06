import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import routes from './routes'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/account/login.vue')
    },
    {
        path: '/',
        component: () => import('@/layouts/index.vue')
    }
]
// 工厂函数创建 router 实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}

export default router