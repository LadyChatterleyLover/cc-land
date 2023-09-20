import { pluginIndexHtml } from './plugin-ccland/indexHtml'
import pluginVue from '@vitejs/plugin-vue'
import { pluginConfig } from './plugin-ccland/config'
import { pluginRoutes } from './plugin-routes'
import { SiteConfig } from 'shared/types'
import { createPluginMdx } from './plugin-mdx'

export function createVitePlugins(config: SiteConfig, restartServer?: () => Promise<void>) {
  return [
    pluginIndexHtml(),
    pluginVue(),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
    }),
    createPluginMdx(),
  ]
}
