import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.scss'

const app = createApp(App)

// 路由
import { initRouter } from "./router";
initRouter(app)

// 插件
import { initPlugins } from './plugins'
initPlugins(app)

app.mount('#app')
