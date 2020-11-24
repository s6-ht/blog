module.exports = {
  title: 's6-ht的技术博客',
  description: '好好学习，天天向上',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }]
  ],
  base: '/',
  themeConfig: {
    logo: '/images/logo.jpg',
    nav: [
      // 导航栏配置
      { text: 'Css', link: '/posts/css/' },
      { text: 'Javascript', link: '/posts/js/' },
      { text: 'Vue', link: '/posts/vue/' },
      { text: '算法', link: '/posts/algorithm/' },
      { text: 'Github', link: 'https://s6-ht.github.io/' },
    ],
    sidebar: [
      { title: '文章目录', path: '', collapsable: false },
      {
        title: 'css', // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          { title: '内置功能', path: '/posts/test.md' },
          { title: '11', path: '/posts/test2.md' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
