import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "material-symbols:home" },
  {
    text: "博客",
    link: "/blog/",
    activeMatch: "^/(blog|article)/",
    icon: "material-symbols:menu-book",
  },
  {
    text: "笔记",
    icon: "icon-park-solid:bookshelf",
    items: [
      {
        text: "Leetcode算法",
        link: "/note/leetcode/",
        activeMatch: "^/note/leetcode/",
        icon: "codicon:comment-unresolved",
      },
    ],
  },
]);
