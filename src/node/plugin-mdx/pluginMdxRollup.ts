import pluginMdx from '@mdx-js/rollup'
import remarkPluginGFM from 'remark-gfm'
import rehypePluginAutolinkHeadings from 'rehype-autolink-headings'
import rehypePluginSlug from 'rehype-slug'
import remarkPluginMDXFrontMatter from 'remark-mdx-frontmatter'
import remarkPluginFrontmatter from 'remark-frontmatter'
import { rehypePluginShiki } from './rehypePlugins/shiki'
import { rehypePluginPreWrapper } from './rehypePlugins/preWrapper'
import shiki from 'shiki'
import { remarkPluginToc } from './remarkPlugins/toc'

export async function pluginMdxRollup() {
  return pluginMdx({
    jsx: true,
    remarkPlugins: [
      remarkPluginGFM,
      remarkPluginFrontmatter,
      remarkPluginToc as any,
      [remarkPluginMDXFrontMatter, { name: 'frontmatter' }],
    ],
    rehypePlugins: [
      rehypePluginSlug,
      [
        rehypePluginAutolinkHeadings,
        {
          properties: {
            class: 'header-anchor',
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
      rehypePluginPreWrapper as any,
      [rehypePluginShiki, { highlighter: await shiki.getHighlighter({ theme: 'nord' }) }],
    ],
  })
}
