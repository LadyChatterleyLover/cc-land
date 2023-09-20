<template>
  <div>
    <h1
      p="2"
      m="4"
    >
      Common Content
    </h1>
    <h1>Doc Content</h1>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import 'uno.css'
import { inject } from 'vue'

const pageData = inject('pageData', undefined)
</script>

<style scoped></style>
