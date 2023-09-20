import pluginMdx from '@mdx-js/rollup'
import remarkPluginGFM from 'remark-gfm'
import type { Plugin } from 'vite'

export function pluginMdxRollup() {
  return pluginMdx({
    jsx: true,
    remarkPlugins: [remarkPluginGFM],
    rehypePlugins: [],
  }) as unknown as Plugin
}
