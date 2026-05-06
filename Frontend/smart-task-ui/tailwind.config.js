/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
       fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        Allura: ['"Allura"', 'cursive'],
        Bruno: ['"Bruno Ace SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 