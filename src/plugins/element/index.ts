import { App } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export const initElementPlusIconsVue = (app: App<Element>) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
}

export const initElementPlus = (app: App<Element>) => {
    app.use(ElementPlus)
}