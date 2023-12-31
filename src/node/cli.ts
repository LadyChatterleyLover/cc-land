import { cac } from 'cac'
import { resolve } from 'node:path'
import { build } from './build'
import { resolveConfig } from './config'
import { preview } from './preview'

const version = require('../../package.json').version

const cli = cac('island').version(version).help()

cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .action(async (root: string) => {
    root = root ? resolve(root) : process.cwd()
    const createServer = async () => {
      const { createDevServer } = await import('./dev.js')
      const server = await createDevServer(root, async () => {
        await server.close()
        await createServer()
      })
      await server.listen()
      server.printUrls()
    }
    await createServer()
  })

cli.command('build [root]', 'build for production').action(async (root: string) => {
  try {
    root = resolve(root)
    const config = await resolveConfig(root, 'build', 'production')
    await build(root, config)
  } catch (e) {
    console.log(e)
  }
})

cli
  .command('preview [root]', 'preview production build')
  .option('--port <port>', 'port to use for preview server')
  .action(async (root: string, { port }: { port: number }) => {
    try {
      root = resolve(root)
      await preview(root, { port })
    } catch (e) {
      console.log(e)
    }
  })

cli.parse()
