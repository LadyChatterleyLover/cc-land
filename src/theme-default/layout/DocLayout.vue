<template>
  <side-bar :sidebarData="matchedSidebar" :pathname="path" />
  <div class="content">
    <div>
      <div class="island-doc">
        <router-view></router-view>
      </div>
      <doc-footer></doc-footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { pageDataContextKey } from '../../runtime/constants'
import SideBar from '../components/sideBar/Sidebar.vue'
import DocFooter from './DocFooter.vue'

const pageData = inject(pageDataContextKey, undefined)
const { siteData } = pageData!
const sidebarData = siteData.themeConfig?.sidebar || {}

const { path } = useRoute()

const matchedSidebarKey = computed(() => {
  return Object.keys(sidebarData).find(key => {
    if (path.startsWith(key)) {
      return true
    }
  })
})

const matchedSidebar = computed(() => sidebarData[matchedSidebarKey.value] || [])
</script>

<style scoped lang="scss">
$sidebarWidth: calc(var(--island-sidebar-width) + ((100vw - var(--island-layout-max-width)) / 2));

$sidebarPadding: calc(32px + (100vw - var(--island-layout-max-width)) / 2);

.content {
  padding: 48px 24px;
  margin-left: calc(var(--island-sidebar-width) + ((100vw - var(--island-layout-max-width)) / 2) + 48px);
  padding-right: $sidebarPadding;
  max-width: calc(100vw - $sidebarWidth - var(--island-aside-width) - 100px);
}
</style>
