<template>
  <a :href="href" :target="target" :rel="rel" class="link" :class="[className]">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
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
