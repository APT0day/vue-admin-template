import { setupViewUIPlus } from './iview'
import { setupPinia } from './pinia'

export default function setupPlugins(app) {
    setupViewUIPlus(app),
    setupPinia(app)
}
