import { createApp } from 'vue'
import App from './App.vue'
import siteData from 'island:site-data'
import { createRouter } from './router'

function renderInBrowser() {
  const containerEl = document.getElementById('root')
  if (!containerEl) {
    throw new Error('#root element not found')
  }
  const app = createApp(App)
  const router = createRouter()
  app.use(router)
  app.mount(containerEl)
}

renderInBrowser()
