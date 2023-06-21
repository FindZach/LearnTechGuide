  /** @type {import('tailwindcss').Config} */
  module.exports = {

    // ...other configuration options
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './src/**/*.**',
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), require('@tailwindcss/typography')]
  }

