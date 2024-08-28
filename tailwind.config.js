/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#2D2D2D',
        'card-blue': '#ECF8FF',
        blue: '#2F82C1',
        toolbar: '#DCF0FC',
        'border-blue' : '#9EC5DC',
      },
    },
  },
  plugins: [],
}

