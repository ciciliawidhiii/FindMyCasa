/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hijau": "#87A96B",
        "hijau-tua":"#556B2F", 
        "coklat-tua": "#3B3024", 
        "coklat-muda":"#E6D5B8", 
        "putih-tulang": "#F5F5DC"
      },
    },
  },
  plugins: [],
}