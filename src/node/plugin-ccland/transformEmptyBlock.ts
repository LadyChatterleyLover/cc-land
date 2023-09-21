import { Plugin } from 'vite'

export async function pluginTransformEmptyBlock(): Promise<Plugin> {
  return {
    name: 'transform-empty-block',
    transform(code, id) {
      if (!/\.(md|mdx)/.test(id)) {
        return
      }
      code += `
        <br />
      `
    },
  }
}
