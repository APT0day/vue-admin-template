import { ref } from "vue";
import router from "@/router";
import {
  RouteRecordNormalized,
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
} from "vue-router";
import { IMenu } from "@/types/menu";

class Menu {
  public menus = ref<IMenu[]>([]);
  public isCollapse = ref<boolean>(false);
  public history = ref<IMenu[]>([]);

  constructor() {
    this.menus.value = this.getMenusByRouter();
    this.history.value = this.getHistory();
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
    return name as string;
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

  // collapse 状态管理
  changeCollapse() {
    this.isCollapse.value = !this.isCollapse.value;
  }

  // 获取面包屑
  getBreadcrumb(route: RouteLocationNormalizedLoaded) {
    return route.matched.map((m) => {
      return m.meta.menu?.title;
    });
  }

  // 获取历史标签
  private getHistory() {
    const routes = [] as RouteRecordRaw[];
    // router.getRoutes().map((r) => routes.push(...r.children));

    return router
      .getRoutes()
      .filter((route) => !route.children.length && route.meta.menu)
      .map((m) => {
        return {
          title: m.meta.menu?.title,
          name: m.name,
        };
      }) as IMenu[];

    // return this.history.value.filter((m) => {
    //   return routes.some((r) => r.name == m.route);
    // });
  }

  removeHistoryTab(menu: IMenu) {
    const index = this.history.value.indexOf(menu);
    this.history.value.splice(index, 1);
  }
  
}

export default new Menu();
