import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Layout from '../theme-default/layout/Layout.vue'
import { routes } from 'island:routes'

export const createRouter = (isSsr = false) => {
  const router = _createRouter({
    history: isSsr ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        component: Layout,
        children: routes,
      },
    ],
  })
  return router
}
