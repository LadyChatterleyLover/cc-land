<template>
  <div>
    <nav-bar></nav-bar>
    <div m="auto" p="t-20 x-16 b-16" style="paddingtop: var(--island-nav-height)">
      <div v-if="pageType === 'home'">
        <home-layout></home-layout>
      </div>
      <div v-else-if="pageType === 'doc'">
        <doc-layout></doc-layout>
      </div>
      <div v-else>404页面</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'uno.css'
import '../styles/base.css'
import '../styles/vars.css'
import '../styles/doc.css'
import { inject } from 'vue'
import { pageDataContextKey } from '../../runtime/constants'
import NavBar from '../components/nav/Nav.vue'
import HomeLayout from './HomeLayout.vue'
import DocLayout from './DocLayout.vue'

const pageData = inject(pageDataContextKey, undefined)
const { pageType } = pageData
</script>

<style scoped lang="scss"></style>
