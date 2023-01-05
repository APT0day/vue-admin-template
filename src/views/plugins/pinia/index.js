import { createPinia } from 'pinia'

export function setupPinia(app) {
    app.use(createPinia())
}