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
  dashboard,
  errors,
  test
];

export default routes;
