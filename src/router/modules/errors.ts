import { RouteRecordRaw } from "vue-router";

const pre = "errors-";

export default {
  path: "/errors",
  name: "errors",
  meta: {
    auth: true,
    menu: {
      title: "错误页面",
      icon: "CircleCloseFilled",
    },
  },
  component: () => import("@/layouts/index.vue"),
  children: [
    {
      path: "403",
      name: `${pre}403`,
      meta: {
        menu: {
          title: "403",
        },
      },
      component: () => import("@/views/errors/403.vue"),
    },
    {
      path: "404",
      name: `${pre}404`,
      meta: {
        menu: {
          title: "404",
        },
      },
      component: () => import("@/views/errors/404.vue"),
    },
    {
      path: "500",
      name: `${pre}500`,
      meta: {
        menu: {
          title: "500",
        },
      },
      component: () => import("@/views/errors/500.vue"),
    },
  ],
} as RouteRecordRaw;
