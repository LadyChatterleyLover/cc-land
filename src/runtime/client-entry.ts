import { createApp } from 'vue'
import App from './App.vue'
import siteData from 'island:site-data'
import { routes } from 'island:routes'
import { createRouter } from './router'
import { PageModule } from 'shared/types'
import { pageDataContextKey } from './constants'

async function initPageData(routePath: string) {
  const route = routes.find(item => item.path === routePath)

  if (route) {
    const preload = route.meta.preload as () => Promise<PageModule>
    const moduleInfo = await preload()
    console.log(moduleInfo)
    return {
      pageType: moduleInfo.frontmatter?.pageType ?? 'doc',
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc,
    }
  }
  return {
    pageType: '404',
    siteData,
    pagePath: routePath,
    frontmatter: {},
  }
}

async function renderInBrowser() {
  const containerEl = document.getElementById('root')
  if (!containerEl) {
    throw new Error('#root element not found')
  }
  const pageData = await initPageData(location.pathname)
  const app = createApp(App)
  const router = createRouter()
  app.provide(pageDataContextKey, pageData)
  app.use(router)
  app.mount(containerEl)
}

renderInBrowser()
