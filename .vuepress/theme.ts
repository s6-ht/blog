import { plumeTheme } from "vuepress-theme-plume";
import notes from "./notes/index.js";
import navbar from "./navbar.js";

export default plumeTheme({
  logo: "/images/blogger-fav.png",
  docsDir: "src",
  contributors: false,
  navbar,
  notes,
  avatar: {
    name: "树懒小姐",
    url: "/images/blogger-fav.png",
    description: "快乐就在当下",
  },
  social: [{ icon: "github", link: "https://github.com/s6-ht" }],

  footer: false,
  plugins: {
    externalLinkIcon: false,
  },
});
