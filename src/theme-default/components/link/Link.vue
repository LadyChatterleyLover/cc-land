<template>
  <a :href="href" :target="target" :rel="rel" class="link" :class="[className]" @click="handleClick($event, href)">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
console.log('router', router)
export interface LinkProps {
  href?: string
  className?: string
}

const props = withDefaults(defineProps<LinkProps>(), {
  href: '/',
  className: '',
})

const EXTERNAL_URL_RE = /^https?/

const isExternal = EXTERNAL_URL_RE.test(props.href)
const target = isExternal ? '_blank' : ''
const rel = isExternal ? 'noopener noreferrer' : undefined

const handleClick = (e: MouseEvent, href: string) => {
  e.stopPropagation()
  e.preventDefault()
  router.push(href)
}
</script>

<style scoped lang="scss">
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
