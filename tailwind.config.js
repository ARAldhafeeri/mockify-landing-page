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
    },
  },
  plugins: [],
}

