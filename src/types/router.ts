import { IMenu } from "./menu";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    auth?: boolean;
    menu?: IMenu;
  }
}
