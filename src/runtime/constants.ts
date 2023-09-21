import { FrontMatter, Header, UserConfig } from 'shared/types'
import { InjectionKey } from 'vue'

export interface PageDataContext {
  pageType: string
  siteData: UserConfig
  frontmatter: FrontMatter
  pagePath: string
  toc: Header[]
}

export const pageDataContextKey: InjectionKey<PageDataContext> = Symbol('pageData')
