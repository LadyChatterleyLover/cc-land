<template>
  <div>
    <home-hero :hero="frontmatter.hero"></home-hero>
    <home-feature :features="frontmatter.features"></home-feature>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { pageDataContextKey } from '../../runtime/constants'
import HomeHero from './HomeHero.vue'
import HomeFeature from './HomeFeature.vue'

const pageData = inject(pageDataContextKey, undefined)
const { frontmatter } = pageData
</script>

<style scoped></style>
