import { RouteRecordRaw } from "vue-router";
import dashboard from "./modules/dashboard";
import amenu from "./modules/amenu";
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
  amenu,
  errors,
];

export default routes;
