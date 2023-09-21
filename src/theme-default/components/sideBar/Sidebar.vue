<template>
  <aside class="sidebar">
    <section v-for="item in sidebarData" :key="item.text" block="~" not-first="divider-top mt-4">
      <div flex="~" justify="between" items="center">
        <h2 m="t-3 b-2" text="1rem text-1" font="bold">{{ item.text }}</h2>
      </div>
      <div mb="1">
        <div v-for="item1 in item.items" :key="item1.link">
          <div ml="5">
            <div
              p="1"
              block="~"
              text="sm"
              font-medium="~"
              :class="[item1.link === pathname ? 'text-brand' : 'text-text-2']"
            >
              <Link :href="item1.link">{{ item1.text }}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </aside>
</template>

<script setup lang="ts">
import Link from '../link/Link.vue'
import { SidebarGroup } from 'shared/types'

interface SidebarProps {
  sidebarData: SidebarGroup[]
  pathname: string
}

defineProps<SidebarProps>()
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: var(--island-z-index-sidebar);
  padding: 32px 32px 96px;
  width: calc(100vw - 64px);
  max-width: 320px;
  background-color: var(--island-c-bg);
  opacity: 0;
  box-shadow: var(--island-c-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.25s ease;
}

:global(.dark) .sidebar {
  box-shadow: var(--island-shadow-1);
}

@media (min-width: 960px) {
  .sidebar {
    z-index: 1;
    padding-top: var(--island-nav-height);
    padding-bottom: 128px;
    width: var(--island-sidebar-width);
    max-width: 100%;
    background-color: var(--island-c-bg-alt);
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    transform: translateX(0);
  }
}

@media (min-width: 1440px) {
  .sidebar {
    padding-left: max(32px, calc(32px + (100% - var(--island-layout-max-width)) / 2));
    width: calc(var(--island-sidebar-width) + ((100% - var(--island-layout-max-width)) / 2));
  }
}
</style>
