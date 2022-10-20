/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    colors: {
      transparent: 'transparent',
      black: '000',
      white: 'fff',
      gray: {
        100: '#E6E6E6',
        400: '#969696',
        600: '#666666',
      },
      cyan: {
        200: '#9CE8FC',
        400: '#61DAFB'
      }
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
