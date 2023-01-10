import { App } from "vue";
import { initPinia } from "./pinia";
import { initElementPlus, initElementPlusIconsVue } from "./element";

export const initPlugins = (app: App<Element>) => {
    initPinia(app),
    initElementPlus(app),
    initElementPlusIconsVue(app)
}