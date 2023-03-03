import { RouteRecordRaw } from "vue-router";

const pre = "dashboard-";

export default {
  path: "/test",
  name: "test",
  meta: {
    auth: true,
    menu: {
      title: "test",
      icon: "Monitor",
    },
  },
  component: () => import("@/layouts/index.vue"),
  children: [
    {
      path: "",
      name: ``,
      component: () => import("@/views/test/test.vue"),
    },
  ],
} as RouteRecordRaw;
