<template>
  <div class="max-w-1152px" m="auto" flex="~ wrap" justify="between">
    <div v-for="feature in features" :key="feature.title" border="rounded-md" p="r-4 b-4" w="1/3">
      <article bg="bg-soft" border="~ bg-soft solid rounded-xl" p="6" h="full">
        <div bg="gray-light-4 dark:bg-white" border="rounded-md" class="mb-5 w-12 h-12 text-3xl flex-center">
          {{ feature.icon }}
        </div>
        <h2 font="bold">{{ feature.title }}</h2>
        <p text="sm text-2" font="medium" class="pt-2 leading-6">
          {{ feature.details }}
        </p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Feature } from 'shared/types'

const props = defineProps<{
  features: Feature[]
}>()
</script>

<style scoped></style>
