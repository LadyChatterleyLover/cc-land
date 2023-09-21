<template>
  <header fixed="~" pos="t-0 l-0" w="full" z="10">
    <div flex="~" items="center" justify="between" class="nav h-14 divider-bottom">
      <div>
        <a href="/" hover="opacity-60" class="w-full h-full text-1rem font-semibold flex items-center"> Island.js </a>
      </div>
      <div flex="~">
        <div flex="~">
          <nav-item v-for="item in nav" :key="item.text" :item="item"></nav-item>
        </div>
        <div flex="~">
          <switch-appearance></switch-appearance>
        </div>
        <div class="{styles.socialLinkIcon}" ml="2">
          <a href="/">
            <div class="i-carbon-logo-github w-5 h-5 fill-current"></div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { pageDataContextKey } from '../../../runtime/constants'
import NavItem from './NavItem.vue'
import SwitchAppearance from '../switchAppearance/SwitchAppearance.vue'

const pageData = inject(pageDataContextKey, undefined)
const { siteData } = pageData!
const nav = siteData.themeConfig.nav || []
</script>

<style lang="scss" scoped>
.social-link-icon {
  display: flex;
  fill: currentColor;
  transition: color 0.2s;
  color: var(--island-c-text-2);
  &:hover {
    color: var(--island-c-text-1);
  }
}
.nav {
  padding-left: max(32px, calc(32px + (100vw - var(--island-layout-max-width)) / 2));
  padding-right: max(32px, calc(32px + (100vw - var(--island-layout-max-width)) / 2));
  background-color: var(--island-c-bg);
}
</style>
