/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent_1: '#F9C420',
        accent_2: '#FFF9EF',
      },
    },
  },
  plugins: [],
};
