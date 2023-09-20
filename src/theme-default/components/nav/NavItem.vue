<template>
  <div class="text-sm font-medium mx-3">
    <a
      :href="item.link"
      class="link"
    >
      {{ item.text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { NavItemWithLink } from '../../../shared/types'
defineProps<{
  item: NavItemWithLink
}>()
</script>

<style lang="scss" scoped>
.link:hover {
  color: var(--island-c-brand);
  transition: color 0.2s;
}

.link {
  display: block;
  font-size: 14px;
  font-weight: 500;
}
</style>
