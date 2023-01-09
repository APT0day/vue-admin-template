import { RouteRecordRaw } from "vue-router";

const meta = {
  auth: true,
};

const pre = "dashboard-";

export default {
  path: "/dashboard",
  name: "dashboard",
  redirect: {
    name: `${pre}console`,
  },
  meta: {
    ...meta,
    menu: {
      title: "首页",
      icon: "Monitor",
    },
  },
  component: () => import("@/layouts/index.vue"),
  children: [
    {
      path: "console",
      name: `${pre}console`,
      meta: {
        ...meta,
        menu: {
          title: "工作台",
        },
      },
      component: () => import("@/views/dashboard/console.vue"),
    },
  ],
} as RouteRecordRaw;
