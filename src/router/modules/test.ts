import { RouteRecordRaw } from "vue-router";

const pre = "test-";

export default {
  path: "/test",
  name: "test",
  meta: {
    auth: true,
    menu: {
      title: "首页",
      icon: "Monitor",
    },
  },
  component: () => import("@/layouts/index.vue"),
  children: [],
} as RouteRecordRaw;
