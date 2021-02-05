module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Fasteer.js",

  description: "Fastify framework to easily bootstrap your Node.js project!",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#a78bfa" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com" }],
    [
      "link",
      {
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "script",
      {
        type: "text/javascript",
        src: "https://viewer.diagrams.net/js/viewer-static.min.js",
      },
    ],
  ],

  // <script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/fasteerjs/fasteerjs.github.io",
    editLinks: true,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    nav: [
      {
        text: "Documentation",
        link: "/docs/",
      },
      {
        text: "Froneb",
        link: "https://froneb.tech",
      },
      {
        text: "Contribute",
        link: "https://github.com/fasteerjs/fasteer",
      },
    ],
    sidebar: {
      "/docs/": [
        {
          title: "Introduction",
          collapsable: false,
          children: [""],
        },
        {
          title: "Getting Started",
          collapsable: false,
          children: [
            "getting-started/installation",
            "getting-started/add-fasteer-to-your-project",
          ],
        },
        {
          title: "The Basics",
          collapsable: false,
          children: ["the-basics/controllers"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  postcss: {
    plugins: [require("postcss-preset-env")(require("../../postcss.config"))],
  },
};
