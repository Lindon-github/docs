import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'
import path from 'node:path'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    // logo: 'https://foruda.gitee.com/avatar/1677043697722550946/5263647_guodong_ll_1578983441.png',
    logo: '/newLogo.png', // 相对路径
    appearance: true,  // 配置 深色模式
    // 社交链接
    social: [
        // { icon: 'github', link: '/' }, /会在首页和个人页面显示
        { icon: 'juejin', link: 'https://juejin.cn/user/2452357158548025/posts' },
        { icon: 'qq', link: 'https://qm.qq.com/q/OaMGflKs0g' },
    ],
    navbarSocialInclude: ['juejin', 'qq'],
    // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
    // aside: true, // 页内侧边栏， 默认显示在右侧
    outline: [2, 3], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    // copyright: true,

    // prevPage: true,   // 是否启用上一页链接
    // nextPage: true,   // 是否启用下一页链接
    // createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
    footer: {
        //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
        message: "©2020-2025---Mr.Lindon",
        copyright: '',
    },

    /**
     * @see https://theme-plume.vuejs.press/config/basic/#profile
     */
    profile: {
        // avatar: 'https://foruda.gitee.com/avatar/1677043697722550946/5263647_guodong_ll_1578983441.png!avatar200',
        avatar: '/newLogo.png',
        name: 'Lindon',
        description: '人生如逆旅，我亦是行人。',
        circle: true,
        location: 'Hong Kong',
        organization: 'china',
    },

    navbar,
    notes,

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    // bulletin: {
    //     layout: 'bottom-right',
    //     contentType: 'markdown',
    //     title: '公告板标题',
    //     content: '公告板内容',
    // },

    bulletin: {
        layout: 'top-right',
        lifetime: 'session',
        // title: '🎉 公告 🎉',
        contentFile: path.join(__dirname, 'bulletin.md'),
        enablePage: true,
        // 页面显示暂未研究透彻
        // enablePage: (page) => {
        //     return page.path === 'front/b6m3o8da/'
        // }

    },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
    transition: {
        page: true,        // 启用 页面间跳转过渡动画
        postList: true,    // 启用 博客文章列表过渡动画
        appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

})
