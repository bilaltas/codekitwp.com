export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "custom-codes",
		htmlAttrs: {
			lang: "en"
		},
		meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/global"],

	tailwindcss: {
		jit: true
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		//{ src: '~/plugins/freshdesk.client.js' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
		'@aceforth/nuxt-optimized-images'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	// PreCompress
	"nuxt-precompress",
	'@nuxtjs/sitemap',
	'nuxt-lazy-load',

	// Font Loader
	['nuxt-font-loader-strategy', {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          // Font
          {
            fileExtensions: ['woff2', 'woff', 'eot'],
            fontFamily: 'Eina01',
            fontFaces: [
              // Font-Face
              {
                src: '@/assets/fonts/eina/Eina01-Regular',
                fontWeight: 400,
                fontStyle: 'normal'
              },
              // Font-Face
				{
                src: '@/assets/fonts/eina/Eina01-SemiBold',
                fontWeight: 500,
                fontStyle: 'normal'
              },
              // Font-Face
				{
                src: '@/assets/fonts/eina/Eina01-Bold',
                fontWeight: 600,
                fontStyle: 'normal'
              }
            ]
          },
          // Font
          {
            fileExtensions: ['woff2', 'woff', 'eot'],
            fontFamily: 'Inter',
            fontFaces: [
              // Font-Face
              {
                src: '@/assets/fonts/inter/Inter-Regular',
                fontWeight: 400,
                fontStyle: 'normal'
              },
              // Font-Face
              {
                src: '@/assets/fonts/inter/Inter-Medium',
                fontWeight: 500,
                fontStyle: 'normal'
				},
			  {
                src: '@/assets/fonts/inter/Inter-SemiBold',
                fontWeight: 600,
                fontStyle: 'normal'
				},
			  {
                src: '@/assets/fonts/inter/Inter-Bold',
                fontWeight: 700,
                fontStyle: 'normal'
              }
            ]
          }
        ]
    }]
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		babel:{
			plugins: [
				['@babel/plugin-proposal-private-methods', { loose: true }]
			]
		},
		html: {
			minify: {
				collapseBooleanAttributes: true,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				trimCustomFragments: true,
				useShortDoctype: true,
				minifyURLs: true,
				removeComments: true,
				removeEmptyElements: true
			}
		}
	},

	optimizedImages: {
		optimizeImages: true
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
			encodingsPriority: ["br", "gzip"]
		},

		// build time compression settings
		gzip: {
			// should compress to gzip?
			enabled: true,
			// compression config
			// https://www.npmjs.com/package/compression-webpack-plugin
			filename: "[path].gz[query]", // middleware will look for this filename
			threshold: 10240,
			minRatio: 0.8,
			compressionOptions: { level: 9 }
		},
		brotli: {
			// should compress to brotli?
			enabled: true,
			// compression config
			// https://www.npmjs.com/package/compression-webpack-plugin
			filename: "[path].br[query]", // middleware will look for this filename
			compressionOptions: { level: 11 },
			threshold: 10240,
			minRatio: 0.8
		}
	},

	sitemap: {
		hostname: 'https://codekitwp.com',
		gzip: true,
		exclude: [
			'/secret',
			'/admin/**',
			'/thank-you'
		],
		routes: [
			'/',
			'/features',
			'/pricing',
			'/support',
			'/my-account',
			'/affiliates',
			'/policies/privacy-policy',
			'/policies/refund-policy',
			'/policies/terms-of-service',
		]
	}
};
