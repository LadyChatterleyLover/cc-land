<template>
  <div flex="~ col 1" style="width: var(--island-aside-width)">
    <div>
      <div v-if="hasOutline" id="aside-container" class="relative divider-left pl-4 text-13px font-medium">
        <div
          id="aside-marker"
          class="absolute top-33px opacity-0 w-1px h-18px bg-brand"
          style="left: '-1px'; transition: 'top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s'"
        ></div>
        <div leading-7="~" text="13px" font="semibold">ON THIS PAGE</div>
        <nav>
          <ul relative="~">
            <li v-for="header in headers" :key="header.id">
              <a
                :href="`#${header.id}`"
                class="block leading-7 text-text-2 hover:text-text-1"
                transition="color duration-300"
                :style="{ paddingLeft: (header.depth - 2) * 12 + 'px' }"
              >
                {{ header.text }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Header } from '../../../shared/types/index'

export interface AsideProps {
  headers: Header[]
}

const props = withDefaults(defineProps<AsideProps>(), {
  headers: () => [],
})

const hasOutline = computed(() => props.headers.length)
</script>

<style scoped lang="scss"></style>
