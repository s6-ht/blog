import { definePlumeNotesConfig } from 'vuepress-theme-plume'
import leetcode from './leetcode.js'

export default definePlumeNotesConfig({
  dir: 'notes',
  link: '/note',
  notes: [
    leetcode
  ],
})
