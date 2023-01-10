import { ref } from "vue";
import router from "@/router";
import { RouteRecordNormalized, RouteLocationNormalized } from "vue-router";
import { IMenu } from "@/types/menu";

class Menu {
  public menus = ref<IMenu[]>([]);
  // public route = ref(null as null | RouteLocationNormalized);
  public isCollapse = ref<boolean>(false)

  constructor() {
    this.menus.value = this.getMenusByRouter();
  }

  // 根据路由元数据构建菜单列表
  getMenusByRouter() {
    return router
      .getRoutes()
      .filter((route) => route.children.length && route.meta.menu)
      .map((route) => {
        const menu: IMenu = { ...route.meta?.menu };
        menu.name = this.filterName(route.name);
        menu.children = this.filterSubMenu(route.children);
        return menu;
      }) as IMenu[];
  }

  // 根据路由元数据构建菜单列表 name
  filterName(name: RouteRecordNormalized["name"]) {
    return name as string
  }

  // 根据路由元数据构建菜单列表子菜单
  filterSubMenu(children: RouteRecordNormalized["children"]): IMenu[] {
    return children
      .filter((route) => route.meta?.menu)
      .map((route) => {
        if (route.children) {
          const childRoute = this.filterSubMenu(route.children);
          return {
            ...route.meta?.menu,
            name: route.name,
            children: childRoute,
          };
        }
        return { ...route.meta?.menu, name: route.name };
      }) as IMenu[];
  }

  changeCollapse() {
    this.isCollapse.value = !this.isCollapse.value
  }
}

export default new Menu();
