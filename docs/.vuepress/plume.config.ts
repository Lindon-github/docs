import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'
import path from "node:path";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/newLogo.png', // 相对路径
  appearance: true,  // 配置 深色模式
  // 您的 Git 存储库 URL
  // docsRepo: '',
  // docsDir: 'docs',

  social: [
    // { icon: 'github', link: 'https://github.com/PLUS-WAVE' },
    // {
    //   icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M4.693 13.638c-.497.568-1.363.63-1.712.63c-.648 0-1.144-.164-1.474-.488c-.313-.307-.478-.76-.489-1.346c-.025-1.358.744-2.762 2.074-2.762c.635 0 1.124.455 1.311.644a.34.34 0 0 0 .282.099a.38.38 0 0 0 .241-.159c.068-.087.135-.237.138-.401s-.057-.344-.243-.49a2.64 2.64 0 0 0-1.668-.591c-.819 0-1.627.376-2.218 1.033c-.621.691-.953 1.63-.935 2.646c.015.815.282 1.5.773 1.982c.528.518 1.3.791 2.235.791c1.097 0 1.776-.325 2.154-.597a.58.58 0 0 0 .24-.456a.7.7 0 0 0-.208-.497c-.23-.248-.448-.101-.503-.037Zm4.97-2.15a8 8 0 0 0-.698-.248q-.237-.072-.45-.131c-.922-.26-1.027-.5-1.017-.68c.022-.363.515-.853 1.352-.792c.607.045 1.015.509 1.205.781c.149.214.371.135.434.095a.6.6 0 0 0 .309-.514a.63.63 0 0 0-.209-.488a2.654 2.654 0 0 0-3.347-.273c-.456.323-.744.772-.77 1.202c-.064 1.061 1.015 1.366 1.803 1.588c.214.061.429.127.667.202c1.14.357 1.173.717 1.092 1.267c-.082.556-.696.834-1.685.761c-1.029-.076-1.464-.61-1.612-.901c-.05-.098-.205-.248-.413-.156c-.514.229-.473.731-.26.993c.339.416 1.15 1.035 2.667 1.035c1.734 0 2.255-.875 2.378-1.64c.092-.572-.022-1.028-.348-1.396c-.236-.267-.592-.495-1.101-.706Zm6.777-2.165c-.598-.431-1.393-.61-2.36-.532c-.712.058-1.274.243-1.335.263l-.006.002a.44.44 0 0 0-.297.379l-.47 5.201a.34.34 0 0 0 .247.35l.072.02l.066.018l.086.021a8 8 0 0 0 1.64.183c.972 0 1.765-.23 2.36-.684c.764-.583 1.141-1.5 1.118-2.725c-.021-1.135-.398-1.974-1.121-2.495Zm-.662 4.461c-.836.639-2.09.562-2.677.481a.13.13 0 0 1-.109-.137l.397-4.248a.11.11 0 0 1 .086-.1c.999-.241 1.777-.168 2.312.218c.189.137.348.331.471.568c.176.339.277.765.286 1.234c.017.916-.24 1.583-.765 1.984Zm8.189-3.374a1.9 1.9 0 0 0-.432-.919c-.399-.465-1.029-.689-1.848-.689c-.734 0-1.372.228-1.947.799c.007-.086.019-.159.018-.223s-.017-.116-.066-.163c-.048-.045-.077-.067-.127-.077s-.122-.008-.256-.006a.587.587 0 0 0-.589.54s-.325 3.874-.428 5.165a.3.3 0 0 0 .073.228a.36.36 0 0 0 .26.131h.387a.224.224 0 0 0 .226-.205l.273-2.929l.014-.147a2 2 0 0 1 .082-.412q.021-.068.047-.14c.245-.694.803-1.72 1.971-1.694c.84.018 1.449.455 1.385 1.114c-.101 1.034-.266 3.1-.358 4.14c-.019.209.182.273.252.273h.304a.44.44 0 0 0 .444-.404s.185-2.127.294-3.352l.048-.532a2 2 0 0 0-.026-.5Z"/></svg>', name: 'e-mail' },
    //   link: 'https://blog.csdn.net/WJwwwwwww?spm=1010.2135.3001.5343'
    // },
    {
      icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>', name: 'e-mail' },
      link: '2246663722@qq.com'
    },
    { icon: 'juejin', link: 'https://juejin.cn/user/2452357158548025/posts' },
    { icon: 'qq', link: 'https://qm.qq.com/q/OaMGflKs0g' },
  ],
  navbarSocialInclude: ['juejin', 'qq'],
  // aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3], // 页内大纲， 默认显示 h2, h3
  locales: {
    '/': {
      profile: {
        // avatar: 'https://foruda.gitee.com/avatar/1677043697722550946/5263647_guodong_ll_1578983441.png!avatar200',
        avatar: '/newLogo.png',
        name: 'Lindon',
        description: '人生如逆旅，我亦是行人。',
        circle: true,
        location: '香港',
        organization: '中国',
      },
      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {

      profile: {
        avatar: '/newLogo.png',
        name: 'Lindon',
        description: 'Life is like an inn, and I am also a traveler.',
        circle: true,
        location: 'Hong Kong',
        organization: 'china',
      },
      navbar: enNavbar,
      notes: enNotes,
    },
  },
  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  bulletin: {
    layout: 'top-right',
    lifetime: 'session',
    // title: '🎉 公告 🎉',
    contentFile: path.join(__dirname, 'bulletin.md'),
    enablePage: true,
    // 页面显示暂未研究透彻
    // enablePage: page => page.path === '/article/hidden/',

  },
  /* 站点页脚 */
  footer: {
    //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    message: "©2020-2025---Mr.Lindon",
    copyright: '',
  },
  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },
})
