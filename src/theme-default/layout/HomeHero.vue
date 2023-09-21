<template>
  <div m="auto" p="t-20 x-16 b-16">
    <div flex="~" class="max-w-1152px" m="auto">
      <div text="left" flex="~ col" class="max-w-592px">
        <h1 font="bold" text="6xl" class="max-w-576px">
          <span class="clip">{{ hero.name }}</span>
        </h1>
        <p text="6xl" font="bold" class="max-w-576px">{{ hero.text }}</p>
        <p p="t-3" text="2xl text-2" font="medium" class="whitespace-pre-wrap max-w-576px">{{ hero.tagline }}</p>
        <div flex="~ wrap" justify="start" p="t-8">
          <div v-for="action in hero.actions" :key="action.link" p="1">
            <cc-button type="a" :text="action.text" :href="action.link" :theme="action.theme" />
          </div>
        </div>
      </div>

      <div v-if="hero.image" w="max-96" h="max-96" flex="center" m="auto">
        <img :src="hero.image.src" :alt="hero.image.alt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CcButton from '../components/button/Button.vue'
import { Hero } from 'shared/types'

defineProps<{
  hero: Hero
}>()
</script>

<style scoped lang="scss">
.clip {
  background: var(--island-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--island-home-hero-name-color);
}
</style>
