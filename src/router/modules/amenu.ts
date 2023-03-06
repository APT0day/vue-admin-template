import { RouteRecordRaw } from "vue-router";

export default {
  path: "/amenu",
  name: "amenu",
  redirect: "/amenu",
  meta: {
    auth: true,
    menu: {
      title: "一级菜单",
      icon: "Menu",
    },
  },
  component: () => import("@/layouts/index.vue"),
  children: [
    {
      path: "/amenu",
      name: "amenu",
      component: () => import("@/views/amenu/index.vue"),
    },
  ],
} as RouteRecordRaw;
