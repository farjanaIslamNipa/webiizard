/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0b193e',
        appPrimary: '#cfa400',
        appSecondary: '#01c2cf',
      }
    },
  },
  plugins: [],
}
