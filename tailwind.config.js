module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
    './node_modules/vue-component-tailwind/dist/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
