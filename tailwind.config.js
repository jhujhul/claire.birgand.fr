const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        darkGray: "#191919",
        alien: "#DEFF00",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        mono: ["Mansalva", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
