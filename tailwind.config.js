/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'steel': '#4B5E6D',  // Стальной
          'blood': '#8B0000',  // Кровавый
          'gold': '#D4AF37',   // Золотой
        },
      },
    },
    plugins: [],
  }