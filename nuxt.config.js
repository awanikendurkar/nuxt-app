const bodyParser = require("body-parser");
const axios = require("axios");

export default {
  // ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "This is WD Blog" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-app-86724-default-rtdb.asia-southeast1.firebasedatabase.app",
    credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  transition: {
    name: "fade",
    mode: "out-in",
  },
  env: {
    fbAPIKey: "AIzaSyCI1pE7O9nUFMOFksQwadF8ysqRKpnGfhA",
  },
  serverMiddleware: [bodyParser.json(), "~/api"],
  generate: {
    routes: function () {
      return axios
        .get(
          "https://nuxt-app-86724-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
        )
        .then((res) => {
          const routes = [];
          for (const key in res.data) {
            routes.push({
              route: "/posts/" + key,
              payload: { postData: res.data[key] },
            });
          }
          return routes;
        });
    },
  },
};
