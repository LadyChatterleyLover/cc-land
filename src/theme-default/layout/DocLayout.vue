<template>
  <side-bar :sidebarData="matchedSidebar" :pathname="path" />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { pageDataContextKey } from '../../runtime/constants'
import SideBar from '../components/sideBar/Sidebar.vue'

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

<style scoped></style>
