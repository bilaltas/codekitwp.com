const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    fontFamily: {
       'serif': 'Inter',
       'mono': '"SF Mono","Roboto Mono",Menlo,monospace',
       'body': 'Inter',
    },
    fontSize: {
      'xs': '.75rem',
      'nav': '.825rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      'heading': '2.75rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      },
    extend: {
      colors: {
        gray: {
          0: '#c5ccdb',
          100: '#b1b8c7',
          200: '#9da4b3',
          300: '#89909f',
          400: '#757c8b',
          500: '#616877',
          600: '#4d5463',
          700: '#39404f',
          800: '#252c3b',
          900: '#111827'
        },
        cc: {
          'title': '#03060b',
          'text': '#445b78',
          'nav': '#2d4665',
          'sub': '#92a0b3',
          'dark': '#121519',
          'main': '#c33030',
        },
      },
    },
  },
   plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1140px',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '1140px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    }
  ]
};
