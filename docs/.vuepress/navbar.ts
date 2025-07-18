import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', icon: 'mdi:home-account', link: '/'},
    {text: '博客', icon: 'mdi:blog-outline', link: '/blog/',},
    {
        text: '编程',
        icon: 'mdi:code-tags-check',
        items: [
            {text: 'Java', link: '/blog/java/'},
            {text: 'JavaScript', link: '/blog/javascript/'},
            {text: 'TypeScript', link: '/blog/typescript/'},
            {text: 'Vue', link: '/blog/vue/'},
            {text: 'React', link: '/blog/react/'},
            {text: 'Node', link: '/blog/node/'},
            {text: 'Webpack', link: '/blog/webpack/'},
        ],
    },
    {
        text: '更多',
        icon:
            'icon-park-outline:more-three',
        items:
            [
                {text: '影视站点', link: 'article/3xzy3tb5', icon: 'logos:vue'},

                {
                    text: 'Vuepress',
                    icon: 'logos:vue',
                    items: [
                        {text: '官方文档', link: 'https://v2.vuepress.vuejs.org', icon: 'logos:vue'},
                        {text: '生态系统', link: 'https://ecosystem.vuejs.press/', icon: 'logos:vue'},
                    ],
                },
            ],
    },
    {
        text: '随笔',
        icon:
            'mdi:note-text-outline',
        items:
            [
                {text: '我的随笔', link: '/notes/note/README.md'},
                {text: '面试', link: 'front/b6m3o8da/'}
            ]
    }
    ,
    {
        text: '分类',
        icon:
            'mdi:folder-outline',
        items:
            [
                {text: '标签', icon: 'mdi:tag-outline', link: '/blog/tags/'},
                {text: '归档', icon: 'mdi:archive-outline', link: '/blog/archives/'},
            ]
    }
    ,
    {
        text: '站点导航', icon:
            'carbon:friendship', link:
            '/links/'
    }
    ,

])
