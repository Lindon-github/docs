import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', icon: 'mdi:home-account', link: '/'},
    {text: '博客', icon: 'mdi:blog-outline', link: '/blog/',},
    {
        text: '分类',
        icon: 'mdi:folder-outline',
        items: [
            {text: '标签', icon: 'mdi:tag-outline', link: '/blog/tags/'},
            {text: '归档', icon: 'mdi:archive-outline', link: '/blog/archives/'},
        ]
    },
    {
        text: '随笔',
        icon: 'mdi:note-text-outline',
        items: [{text: '示例', link: '/notes/demo/README.md'}]
    },
    {text: '站点导航', icon: 'carbon:friendship', link: '/links/'},

])
