import compression from 'compression'
import fs from 'fs-extra'
import path from 'path'
import polka, { type IOptions } from 'polka'
import sirv, { type RequestHandler } from 'sirv'
import { resolveConfig } from './config'

const DEFAULT_PORT = 4173

export interface ServeOptions {
  base?: string
  root?: string
  port?: number
}

export async function preview(root: string, { port = DEFAULT_PORT }) {
  const config = await resolveConfig(root, 'serve', 'production')
  const outputDir = path.resolve(root, 'build')
  const notAnAsset = (pathname: string) => !pathname.includes(`/${config.root}/`)
  const notFound = fs.readFileSync(path.resolve(outputDir, './404.html'))
  const onNoMatch: IOptions['onNoMatch'] = (req, res) => {
    res.statusCode = 404
    if (notAnAsset(req.path)) res.write(notFound.toString())
    res.end()
  }

  const compress = compression() as RequestHandler
  const serve = sirv(outputDir, {
    etag: true,
    maxAge: 31536000,
    immutable: true,
    setHeaders(res, pathname) {
      if (notAnAsset(pathname)) {
        // force server validation for non-asset files since they
        // are not fingerprinted
        res.setHeader('cache-control', 'no-cache')
      }
    },
  })

  return polka({ onNoMatch })
    .use(compress, serve)
    .listen(port, () => {
      console.log(`Built site served at http://localhost:${port}/`)
    })
}
