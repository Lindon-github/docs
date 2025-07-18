import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
/**
 *  dir 保存所有笔记的目录 default '/notes/'
 *  link 访问路径  '/'
 *  notes 笔记配置 
 */
const demoNote = defineNoteConfig({
  dir: 'note',
  link: '/note',
  sidebar: "auto"
})

const frontNote = defineNoteConfig({
  dir: 'front',
  link: '/front',
  sidebar: ['1', '2'],
})
export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, frontNote],
})
