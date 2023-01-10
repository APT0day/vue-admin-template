import { RouteRecordRaw } from "vue-router";
import dashboard from "./modules/dashboard";
import sql from "./modules/sql";
import errors from "./modules/errors";

// 主框架内显示
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: {
      name: "dashboard-console",
    },
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "index",
        name: "index",
        redirect: { name: "dashboard-console" },
      },
    ],
  },
  // 登录
  {
    path: "/login",
    name: "login",
    meta: {
      title: "login",
    },
    component: () => import("@/views/account/login.vue"),
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/views/errors/404.vue"),
  },
  // // 忘记密码
  // {
  //     path: '/forgetPwd',
  //     name: 'forgetPwd',
  //     meta: {
  //         title: 'forgetPwd'
  //     },
  //     component: () => import('@/views/account/forgetPwd.vue')
  // },
  // // 注册
  // {
  //     path: '/register',
  //     name: 'register',
  //     meta: {
  //         title: 'register'
  //     },
  //     component: () => import('@/views/account/register.vue')
  // },
  // // 注册结果
  // {
  //     path: '/register/result',
  //     name: 'register-result',
  //     meta: {
  //         auth: true,
  //         title: 'register-result'
  //     },
  //     component: () => import('@/views/account/registerResult.vue')
  // },
  dashboard,
  sql,
  errors,
];

// 重新组织后导出
export default routes;
