module.exports = {
  title: "s6-ht的博客",
  description: "好好学习，天天向上",
  plugins: ["@vuepress/blog"],
  themeConfig: {
    logo: '',
    nav: [
      // 导航栏配置
      { text: "前端基础", link: "/" },
      { text: "算法题库", link: "/" },
      { text: "微博", link: "/" },
    ],
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
