declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module 'island:site-data' {
  import { UserConfig } from 'shared/types'

  const siteDataConfig: UserConfig
  export default siteDataConfig
}

declare module 'island:routes' {
  import { RouteRecordRaw } from 'vue-router'
  const routes: RouteRecordRaw[]
  export { routes }
}
