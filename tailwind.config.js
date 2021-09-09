const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
const { toRgba } = require('tailwindcss/lib/util/withAlphaVariable')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.500'),
            '> :first-child': { marginTop: null },
            '> :last-child': { marginBottom: null },
            '&:first-child > :first-child': {
              marginTop: '0',
            },
            '&:last-child > :last-child': {
              marginBottom: '0',
            },
            'h1, h2': {
              letterSpacing: '-0.025em',
            },
            h4: {
              fontSize: '1.125em',
            },
            'h2, h3': {
              'scroll-margin-top': `${(70 + 40) / 16}rem`,
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              width: '0.75em',
              height: '0.125em',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: 0,
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.cyan.700'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              boxShadow: theme('boxShadow.link'),
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            code: {
              fontWeight: '400',
              color: theme('colors.violet.600'),
            },
            'code::before': {
              // content: 'none',
            },
            'code::after': {
              // content: 'none',
            },
            pre: {
              backgroundColor: null,
              color: theme('colors.white'),
              borderRadius: 0,
              marginTop: 0,
              marginBottom: 0,
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.gray.600'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.200'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
          },
        },
      }),
      height: {
        nav: '70px',
      },
      letterSpacing: {
        wpx: '-0.01em',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -2px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.02)',
        lg: '0 8px 12px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',

        amber: colors.amber,
        blue: colors.blue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: {
          ...colors.coolGray,
          150: '#ECEDF0',
        },
        bgray: colors.blueGray,
        green: colors.green,
        indigo: colors.indigo,
        'light-blue': colors.lightBlue,
        lime: colors.lime,
        dark: {
          ...colors.gray,
          950: '#141414',
          1000: '#0C0C0C',
        },
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        violet: colors.violet,
        yellow: colors.yellow,
        code: {
          punctuation: '#A1E8FF',
          tag: '#D58FFF',
          'attr-name': '#4BD0FB',
          'attr-value': '#A2F679',
          string: '#A2F679',
          highlight: 'rgba(134, 239, 172, 0.25)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1170px',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '1140px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        }
      })
    }
  ]
}
