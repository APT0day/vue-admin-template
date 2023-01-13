import { RouteRecordRaw } from "vue-router";
import dashboard from "./modules/dashboard";
import errors from "./modules/errors";
import test from "./modules/test"

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
  //     component: () => import('@/views/account/forgetPwd.vue')
  // },
  // // 注册
  // {
  //     path: '/register',
  //     name: 'register',
  //     component: () => import('@/views/account/register.vue')
  // },
  // // 注册结果
  // {
  //     path: '/register/result',
  //     name: 'register-result',
  //     component: () => import('@/views/account/registerResult.vue')
  // },
  dashboard,
  errors,
  test
];

export default routes;
