/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f41bb',
        grey: '#ECECEC',
        'grey-light': '#F1F4FF',
        'grey-lighter': '#F8F9FF',
      },
    },
  },
  plugins: [],
};
