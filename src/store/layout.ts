import { defineStore } from "pinia";
import router from "@/router";
import { RouteRecordRaw } from "vue-router";
import { menuListRoutes } from "@/router/routes";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    siderMenuList: [] as RouteRecordRaw[],
  }),
  getters: {
    getMenu() {
      this.siderMenuList = router.getRoutes()
    },
  },
  actions: {
    getMenuByRoute() {
      return router.getRoutes();
    },
  },
});
