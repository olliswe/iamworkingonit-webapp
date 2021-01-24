const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.ts",
    "./components/**/*.ts",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        logo: ["LogoFont"],
        logoFilled: ["LogoFontFilled"],
      },
      colors: {
        primary: colors.yellow,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
