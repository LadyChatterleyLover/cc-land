import App from './App.vue'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createRouter } from './router'
// For ssr component render
export function render() {
  const app = createSSRApp(App)
  const router = createRouter(true)
  app.use(router)
  return renderToString(app)
}
