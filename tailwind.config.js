const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },

    colors: {
      BACKGROUND_DARK: "#202c37",
      BACKGROUND_DARK_ELEMENT: 	"#2b3945",
      BACKGROUND_LIGHT: "#fafafa",

      BLUE: {
        _100: "#111517"
      },

      WHITE: {
        _100: "#ffffff"
      }
    }
  },
  plugins: [],
}