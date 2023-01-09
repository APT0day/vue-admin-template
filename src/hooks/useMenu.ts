import { ref } from "vue";
import router from "@/router";
import { RouteLocationNormalized } from "vue-router";
import { IMenu } from "@/types/menu";

class Menu {
  public menus = ref<IMenu[]>([]);
  // public route = ref(null as null | RouteLocationNormalized);

  constructor() {
    this.menus.value = this.getMenuByRoute();
  }

  // 根据路由元数据构建菜单列表
  getMenuByRoute() {
    return router
      .getRoutes()
      .filter((route) => route.children.length && route.meta.menu)
      .map((route) => {
        const menu: IMenu = { ...route.meta.menu };
        menu.children = this.filterNestedMenu(route.children);
        return menu;
      })
      .filter((menu) => menu.children?.length) as IMenu[];
  }
}

export default new Menu();
