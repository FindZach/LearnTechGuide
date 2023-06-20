  /** @type {import('tailwindcss').Config} */
  module.exports = {

    // ...other configuration options
    content: [
      './src/**/*.html',
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs"), require('@tailwindcss/typography')]
  }

