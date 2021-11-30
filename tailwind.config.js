module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          DEFAULT: "#0B0D17",
        },
        "light-blue": {
          DEFAULT: "#D0D6F9",
        },
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}