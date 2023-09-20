import { pluginIndexHtml } from './plugin-ccland/indexHtml'
import pluginVue from '@vitejs/plugin-vue'
import pluginVueJsx from '@vitejs/plugin-vue-jsx'
import { babel } from '@rollup/plugin-babel'
import { pluginConfig } from './plugin-ccland/config'
import { pluginRoutes } from './plugin-routes'
import { SiteConfig } from 'shared/types'
import { createPluginMdx } from './plugin-mdx'
import pluginUnocss from 'unocss/vite'
import unocssOptions from './unocssOptions'

export async function createVitePlugins(config: SiteConfig, restartServer?: () => Promise<void>) {
  return [
    pluginIndexHtml(),
    pluginVue(),
    pluginVueJsx(),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
    }),
    pluginUnocss(unocssOptions),
    await createPluginMdx(),
    babel({
      extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
      plugins: ['@vue/babel-plugin-jsx'],
    }),
  ]
}
