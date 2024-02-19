import { getDirname, path } from 'vuepress/utils'
import { defineUserConfig } from 'vuepress'
import theme from './.vuepress/theme.js'
import { viteBundler } from '@vuepress/bundler-vite'

const __dirname = getDirname(import.meta.url)
const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs)

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': { lang: 'zh-CN', title: '树懒小姐', description: '热爱生活' },
  },
  dest: 'docs',
  public: resolve('public'),
  temp: resolve('.vuepress/.temp'),
  cache: resolve('.vuepress/.cache'),
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'keywords', content: 'sloth,前端,front-end' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edg' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  bundler: viteBundler(),
  theme,
})
