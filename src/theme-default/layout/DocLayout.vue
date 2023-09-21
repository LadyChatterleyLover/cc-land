<template>
  <side-bar :sidebarData="matchedSidebar" :pathname="$route.path" />
  <div class="content" flex="~">
    <div class="doc-content">
      <div class="island-doc">
        <router-view></router-view>
      </div>
      <doc-footer></doc-footer>
    </div>
    <div relative="~" display="none lg:block" order="2" flex="1" p="l-8" class="max-w-256px">
      <div class="aside-container">
        <aside-nav :headers="toc" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { pageDataContextKey } from '../../runtime/constants'
import SideBar from '../components/sideBar/Sidebar.vue'
import DocFooter from './DocFooter.vue'
import AsideNav from '../components/asideNav/AsideNav.vue'

const pageData = inject(pageDataContextKey, undefined)
const { siteData, toc } = pageData!
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
  margin-right: $sidebarPadding;
  // 100 vw - sidebar 的宽度
  max-width: calc(100vw - $sidebarWidth);
}

.doc-content {
  margin-right: 80px;
  min-width: 768px;
  // 正文部分最大宽度: 100vw - sidebar 的宽度 - aside 的宽度 - 右边的 padding 和 margin
  max-width: calc(
    100vw - $sidebarWidth - var(--island-aside-width) - (100vw - var(--island-layout-max-width)) / 2 - 80px
  );
}

.aside-container {
  position: sticky;
  top: 0;
  margin-top: calc(var(--island-nav-height) * -1 - 32px);
  padding-top: calc(var(--island-nav-height) + 32px);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}
</style>
