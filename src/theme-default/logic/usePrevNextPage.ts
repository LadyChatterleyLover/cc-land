import { pageDataContextKey } from '../../runtime/constants'
import { SidebarItem } from 'shared/types'
import { inject } from 'vue'
import { useRoute } from 'vue-router'

export function usePrevNextPage() {
  const pageData = inject(pageDataContextKey)
  const { path } = useRoute()
  const { siteData } = pageData
  const sidebar = siteData.themeConfig?.sidebar || {}
  const flattenTitles: SidebarItem[] = []

  // 遍历 Sidebar 数据，收集所有的文章信息，并平铺到一个数组里面
  Object.keys(sidebar).forEach(key => {
    const groups = sidebar[key] || []
    groups.forEach(group => {
      group.items.forEach(item => {
        flattenTitles.push(item)
      })
    })
  })
  const pageIndex = flattenTitles.findIndex(item => item.link === path)

  const prevPage = flattenTitles[pageIndex - 1] || null
  const nextPage = flattenTitles[pageIndex + 1] || null

  return {
    prevPage,
    nextPage,
  }
}
