import { App } from "vue";
import { createPinia } from "pinia";

export const initPinia = (app: App<Element>) => {
    app.use(createPinia())
}