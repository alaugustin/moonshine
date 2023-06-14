/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'vividCyan': '#20FFF1',
      'veryPaleCyan': '#f8ffff',
      'darkCyan': '#118078',
      'veryDarkCyan': '#08403c',
      'strongCyan': '#05b3a7',
      'lightMagenta': '#FF3BE2',
      'vividYellow': '#FFD108',
      'strongYellow': '#b3940e',
      'strongBlue': '#0670cc',
      'darkModBlue': '#517899',
      'lightGrayBlue': '#f1f5f8',
      'lightRed': '#FF7F61',
      'strongRed': '#cc0f06',
      'mainBlack': '#020c27',
      'white': '#fff'
    },
    fontFamily: {
      'overpass': ['Overpass Mono', 'monospace'],
      'cinzel': ['Cinzel Decorative', 'sans-serif'],
      'libre': ['Libre Franklin', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        'topEase0.5': 'top ease 0.5s',
      },
    },
  },
  plugins: [],
};

