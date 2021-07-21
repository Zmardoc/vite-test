const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      indigo: colors.indigo[600],
      white: colors.white,
      gray: colors.gray[200],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
