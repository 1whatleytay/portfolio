// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        plex: ['DM Sans', 'Verdana'],
        body: ['IBM Plex Sans', 'Helvetica']
      }
    }

    // colors
  },
  variants: {
    extend: {}
  },
  plugins: []
}