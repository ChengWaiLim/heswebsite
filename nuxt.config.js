module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    script: [
      { src: "js/vendor/modernizr-3.5.0.min.js" },
      { src: "js/vendor/jquery-1.12.4.min.js" },
      { src: "js/popper.min.js" },
      { src: "js/bootstrap.min.js" },
      { src: "js/owl.carousel.min.js" },
      { src: "js/isotope.pkgd.min.js" },
      { src: "js/ajax-form.js" },
      { src: "js/waypoints.min.js" },
      { src: "js/jquery.counterup.min.js" },
      { src: "js/imagesloaded.pkgd.min.js" },
      { src: "js/scrollIt.js" },
      { src: "js/jquery.scrollUp.min.js" },
      { src: "js/wow.min.js" },
      { src: "js/nice-select.min.js" },
      { src: "js/jquery.slicknav.min.js" },
      { src: "js/jquery.magnific-popup.min.js" },
      { src: "js/plugins.js" },
      { src: "js/gijgo.min.js" },
      { src: "js/contact.js" },
      { src: "js/jquery.ajaxchimp.min.js" },
      { src: "js/jquery.form.js" },
      { src: "js/jquery.validate.min.js" },
      { src: "js/mail-script.js" },
      { src: "js/main.js" }
    ],
    title: "hestech-website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  generate: {
    minify: {
      collapseWhitespace: false
    }
  },
  /*
   ** Build configuration
   */
  buildModules: ['@nuxt/typescript-build'],
  build: {
    /*
     ** Run ESLint on save
     */
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     });
    //   }
    // }
  }
};
