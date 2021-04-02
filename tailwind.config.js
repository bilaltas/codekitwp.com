const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    fontFamily: {
       'serif': 'Eina01',
       'mono': 'ui-monospace',
       'body': 'Inter',
    },
    fontSize: {
      'xs': '.75rem',
      'nav': '0.825em',
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
        red: {
          '50': '#ffebee',
          '100': '#ffcdd2',
          '200': '#ef9a9a',
          '300': '#e57373',
          '400': '#ef5350',
          '500': '#f44336',
          '600': '#e53935',
          '700': '#d32f2f',
          '800': '#c62828',
          '900': '#b71c1c',
          'accent-100': '#ff8a80',
          'accent-200': '#ff5252',
          'accent-400': '#ff1744',
          'accent-700': '#d50000',
          'main': '#E01F3D',
        },
      },
    },
  },
   plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1100px',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '1100px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
        }
      })
    }
  ]
};
