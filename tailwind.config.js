/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/homebg.jpg')"
      },
      fontFamily:{
        'fire-sans': ['Fire-sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
}
