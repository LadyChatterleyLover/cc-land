import pluginVue from '@vitejs/plugin-vue'
import { babel } from '@rollup/plugin-babel'
import { pluginIndexHtml } from './plugin-ccland/indexHtml'
import { pluginTransformEmptyBlock } from './plugin-ccland/transformEmptyBlock'
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
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
    }),
    pluginTransformEmptyBlock(),
    pluginUnocss(unocssOptions),
    await createPluginMdx(),
    babel({
      extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
      plugins: ['@vue/babel-plugin-jsx'],
    }),
  ]
}
