import { defineConfig } from '../dist'

export default defineConfig({
  title: '标题',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
  },
})
