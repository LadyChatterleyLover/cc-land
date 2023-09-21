import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Layout from '../theme-default/layout/Layout.vue'
import { routes } from 'island:routes'
import NotFoundLayout from '../theme-default/layout/NotFoundLayout.vue'

export const createRouter = (isSsr = false) => {
  const router = _createRouter({
    history: isSsr ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        component: Layout,
        children: routes,
      },
      {
        path: '/404',
        name: '/404',
        component: NotFoundLayout,
      },
      {
        path: '/:pathMatch(.*)',
        redirect: '/404',
      },
    ],
  })
  return router
}
