<template>
  <div>
    <nav-bar></nav-bar>
    <br />
    <br />
    <br />
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

const pageData = inject(pageDataContextKey, undefined)
</script>

<style scoped></style>
