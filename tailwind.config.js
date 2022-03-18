const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
       fuchsia:colors.fuchsia
      }
    },
  },
  plugins: [],
}
