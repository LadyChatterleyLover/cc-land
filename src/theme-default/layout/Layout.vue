<template>
  <div>
    <nav-bar></nav-bar>
    <div v-if="pageType === 'home'">
      <home-layout></home-layout>
    </div>
    <div v-else-if="pageType === 'doc'">正文页面</div>
    <div v-else>404页面</div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import 'uno.css'
import '../styles/base.css'
import '../styles/vars.css'
import { inject } from 'vue'
import { pageDataContextKey } from '../../runtime/constants'
import NavBar from '../components/nav/Nav.vue'
import HomeLayout from './HomeLayout.vue'

const pageData = inject(pageDataContextKey, undefined)
const { pageType } = pageData
</script>

<style scoped></style>
