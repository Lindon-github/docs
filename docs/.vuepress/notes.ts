import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */
// C++
const zhNoteConfig1 = defineNoteConfig({
  // 声明笔记的目录，相对于 `notes.dir`，这里表示 `notes/typescript` 目录
  dir: 'C++',
  // 声明笔记的链接前缀，与 `notes.link` 拼接，这里表示 `/typescript/`
  // 笔记内的所有文章会以 `/typescript/` 作为访问链接前缀。
  link: '/cpp/',
  // 配置 笔记侧边导航栏，用于导航向笔记内的所有文档
  // 声明为 `auto` 的，将根据目录结构自动生成侧边栏导航
  sidebar: [
    '',
    {
      dir: '1.面向对象高级开发 Part1',
      text: '1.面向对象高级开发Part1',
      icon: 'catppuccin:cpp',
      collapsed: false,
      items: 'auto',
    },
    {
      dir: '2.面向对象高级开发 Part2',
      text: '2.面向对象高级开发Part2',
      icon: 'catppuccin:cpp-header',
      collapsed: false,
      items: 'auto',
    },
    {
      dir: '3. STL & 泛式编程',
      text: '3. STL & 泛式编程',
      icon: 'codicon:library',
      collapsed: false,
      items: 'auto',
    },
  ]
})
// OpenGL
const zhNoteConfig2 = defineNoteConfig({
  dir: 'OpenGL',
  link: '/opengl/',
  sidebar: [
    '',
    {
      dir: 'OpenGL',
      text: 'OpenGL实验笔记',
      icon: 'devicon:opengl',
      collapsed: false,
      items: 'auto',
    },
  ]
})

// 3DV Course
const zhNoteConfig3 = defineNoteConfig({
  dir: '3DV Course',
  link: '/3dv/',
  sidebar: [
    '',
    {
      dir: '3DV Course',
      text: '3DV Course Notes',
      icon: 'gis:cube-3d',
      collapsed: false,
      items: 'auto',
    },
  ]
})

// Experience
const zhNoteConfig4 = defineNoteConfig({
  dir: 'Experience',
  link: '/experience/',
  sidebar: [
    '',
    {
      dir: '1. Environment',
      text: '1. Environment',
      icon: 'noto:package',
      collapsed: false,
      items: 'auto',
    },
    {
      dir: '2. Linux&Server',
      text: '2. Linux&Server',
      icon: 'skill-icons:linux-dark',
      collapsed: false,
      items: 'auto',
    },
    {
      dir: '3. Applications',
      text: '3. Applications',
      icon: 'fluent-color:apps-16',
      collapsed: false,
      items: 'auto',
    },
  ]
})

// interview
const zhNoteConfig5 = defineNoteConfig({
  dir: 'interview',
  link: '/before/',
  sidebar: [
    '',
    {
      dir: '1.前端面试题',
      text: '1.前端面试题',
      icon: 'skill-icons:javascript',
      collapsed: true,
      items: 'auto',
    },
  ]
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    zhNoteConfig1,
    zhNoteConfig2,
    zhNoteConfig3,
    zhNoteConfig4,
    zhNoteConfig5
  ],
})







/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

