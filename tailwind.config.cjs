const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
    './node_modules/vue-litewind/dist/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
        info: colors.blue,
        warn: colors.yellow,
        success: colors.green,
        danger: colors.red,
        dark: colors.neutral,
        light: colors.white,
        text: colors.gray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     require("@tailwindcss/forms")({
    strategy: 'class', // only generate classes
  }),
    
  ],
}
