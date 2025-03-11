import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'note',
  link: '/note',
  sidebar: ['', '1', '2'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote],
})
