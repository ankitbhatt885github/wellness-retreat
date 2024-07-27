const theme = require('./src/theme'); // Import the theme file

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        body: theme.fonts.body,
        heading: theme.fonts.heading,
      }, 
    },
  },
  plugins: [],
}