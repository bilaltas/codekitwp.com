export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CodeKit | The Code Editor for WordPress',
    titleTemplate: '%s | CodeKit',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Complete Code Editor for WordPress. Finally, a simple, intuitive interface and easy workflow for WordPress custom codes.',
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@CodeKitWP' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.codekitwp.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'CodeKit | The Code Editor for WordPress',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Complete Code Editor for WordPress. Finally, a simple, intuitive interface and easy workflow for WordPress custom codes.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.codekitwp.com/codekit-card.png',
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.codekitwp.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'CodeKit | The Code Editor for WordPress',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Complete Code Editor for WordPress. Finally, a simple, intuitive interface and easy workflow for WordPress custom codes.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.codekitwp.com/codekit-card.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.codekitwp.com/codekit-card.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'CodeKit',
      },
    ],

    link: [
      // favicon
      { rel: 'icon', type: 'image/x-icon', href: '/images/icon-circle.png' },

      // canonical
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.codekitwp.com',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/google-analytics',
    // '@aceforth/nuxt-optimized-images',
    '@nuxtjs/html-validator'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  htmlValidator: {
    usePrettier: false,
    failOnError: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off'
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-precompress',
    [
      'nuxt-lazy-load',
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: true,

        // To remove class set value to false
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
      },
    ],

    [
      'nuxt-font-loader-strategy',
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          // Font
          {
            fileExtensions: ['woff2', 'woff', 'svg'],
            fontFamily: 'Graphik',
            fontFaces: [
              // Font-Face
              {
                src: '@/assets/fonts/graphik/Graphik-Regular',
                fontWeight: 400,
                fontStyle: 'normal',
              },
              // Font-Face
              {
                src: '@/assets/fonts/graphik/Graphik-Medium',
                fontWeight: 500,
                fontStyle: 'normal',
              },
              // Font-Face
              {
                src: '@/assets/fonts/graphik/Graphik-Bold',
                fontWeight: 600,
                fontStyle: 'normal',
              },
            ],
          },
        ],
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: 'https://codekitwp.com',
    gzip: true,
    exclude: ['/secret', '/admin/**', '/thank-you'],
    routes: ['/', '/features', '/pricing', '/support', '/my-account', '/affiliates', '/policies/privacy-policy', '/policies/refund-policy', '/policies/terms-of-service'],
  },

  googleAnalytics: {
    id: 'UA-183267100-1',
  },

  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip'],
    },

    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  },
}
