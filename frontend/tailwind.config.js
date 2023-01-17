/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins, sans-serif"],
      },
    },
  },

  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    require("postcss"),
    require("flowbite"),
  ],
};
