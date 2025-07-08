const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD300',
        dark: '#0C1736',
        light: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
