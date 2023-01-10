import { RouteRecordRaw } from "vue-router";

const pre = "sql-";

export default {
  path: "/sql",
  name: "sql",
  meta: {
    auth: true,
    menu: {
      title: "sql",
      icon: "Plus",
    },
  },
  component: () => import("@/layouts/index.vue"),
  children: [
    {
      path: "sql1",
      name: `${pre}sql1`,
      meta: {
        menu: {
          title: "sql1",
        },
      },
      component: () => import("@/views/sql/sql1.vue"),
    },
  ],
} as RouteRecordRaw;
