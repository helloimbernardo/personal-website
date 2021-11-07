const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Zen Dots', 'sans-serif'],
        mono: ['Jetbrains Mono', 'monospace']
      },
      colors:{
        'orange': colors.orange,
      },
      stroke: {
        current: 'currentColor',
        white: '#fff',
        black: '#000',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  variants: {
    extend: {
      stroke: ['hover'],
      borderWidth: ['hover']
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}
