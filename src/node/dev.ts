import { createServer as createViteServer } from 'vite'
import { resolveConfig } from './config'
import { PACKAGE_ROOT } from './constants'
import { createVitePlugins } from './vitePlugins'

export async function createDevServer(root = process.cwd(), restart: () => Promise<void>) {
  const config = await resolveConfig(root, 'serve', 'development')
  return createViteServer({
    root: PACKAGE_ROOT,
    plugins: await createVitePlugins(config, restart),
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  })
}
