import fastGlob from 'fast-glob'
import { normalizePath } from 'vite'
import path from 'path'

interface RouteMeta {
  routePath: string
  absolutePath: string
}

export class RouteService {
  #scanDir: string
  #routeData: RouteMeta[] = []
  constructor(scanDir: string) {
    this.#scanDir = scanDir
  }

  async init() {
    const files = fastGlob
      .sync(['**/*.{js,jsx,ts,tsx,md,mdx,vue}'], {
        cwd: this.#scanDir,
        absolute: true,
        ignore: ['**/node_modules/**', '**/build/**', 'config.ts'],
      })
      .sort()
    files.forEach(file => {
      // 1. 路由路径
      const fileRelativePath = normalizePath(path.relative(this.#scanDir, file))
      const arr = fileRelativePath.split('.')
      const routePath = '/' + arr[0]
      // 2. 文件绝对路径
      this.#routeData.push({
        routePath: this.normalizeRoutePath(routePath).toLowerCase(),
        absolutePath: file,
      })
    })
  }

  generateRoutesCode() {
    return `
  export const routes = [
  ${this.#routeData
    .map(route => {
      return `{ path: '${route.routePath}', component: () => import('${route.absolutePath}') }`
    })
    .join(',\n')}
  ];
  `
  }

  normalizeRoutePath(rawPath: string) {
    const routePath = rawPath.replace(/\.(.*)?$/, '').replace(/index$/i, '')
    return routePath.startsWith('/') ? routePath : `/${routePath}`
  }
}
