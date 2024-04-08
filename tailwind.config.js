/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '700': '700px',
        '500': '500px',
        '400': '400px'
      },
      colors: {
        'green1': '#00df9a',
        'red1': "#ff4d4d"
      }
    },
  },
  plugins: [],
}

