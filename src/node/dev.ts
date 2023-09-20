import { createServer as createViteServer } from 'vite'
import { pluginIndexHtml } from './plugin-ccland/indexHtml'
import vuePlugin from '@vitejs/plugin-vue'
import { resolveConfig } from './config'
import { pluginConfig } from './plugin-ccland/config'
import { PACKAGE_ROOT } from './constants'
import { pluginRoutes } from './plugin-routes'
import { createVitePlugins } from './vitePlugins'

export async function createDevServer(root = process.cwd(), restart: () => Promise<void>) {
  const config = await resolveConfig(root, 'serve', 'development')
  return createViteServer({
    root: PACKAGE_ROOT,
    plugins: createVitePlugins(config, restart),
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  })
}
