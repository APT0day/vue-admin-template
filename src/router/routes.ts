import { RouteRecordRaw } from "vue-router";
import dashboard from './modules/dashboard'
import sql from './modules/sql'

// 主框架内显示
const frameInRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {
            name: 'dashboard-console'
        },
        meta: {
            isHide: true
        },
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: 'index',
                name: 'index',
                redirect: { name: 'dashboard-console' }
            }
        ]
    },
    dashboard,
    sql
]

// 主框架外显示
const publicRoutes: RouteRecordRaw[] = [
    // 登录
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'login'
        },
        component: () => import('@/views/account/login.vue')
    },
    // 忘记密码
    {
        path: '/forgetPwd',
        name: 'forgetPwd',
        meta: {
            title: 'forgetPwd'
        },
        component: () => import('@/views/account/forgetPwd.vue')
    },
    // 注册
    {
        path: '/register',
        name: 'register',
        meta: {
            title: 'register'
        },
        component: () => import('@/views/account/register.vue')
    },
    // 注册结果
    {
        path: '/register/result',
        name: 'register-result',
        meta: {
            auth: true,
            title: 'register-result'
        },
        component: () => import('@/views/account/registerResult.vue')
    }
]

// 错误页面
const errorPageRoutes: RouteRecordRaw[] = [
    {
        path: '/403',
        name: '403',
        meta: {
            title: '403'
        },
        component: () => import('@/views/errors/403.vue')
    },
    {
        path: '/500',
        name: '500',
        meta: {
            title: '500'
        },
        component: () => import('@/views/errors/500.vue')
    },
    {
        path: '/*',
        name: '404',
        meta: {
            title: '404'
        },
        component: () => import('@/views/errors/404.vue')
    }
]

// 导出显示菜单的路由
export const menuListRoutes = frameInRoutes

// 重新组织后导出
export default [
    ...frameInRoutes,
    ...publicRoutes,
    ...errorPageRoutes
]