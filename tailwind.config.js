/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightbg: '#FFFAF2',
        lightheader: '#FFEDCC',
        lightorangetext: '#DB2E01',
        lightpurpletext: '#602D74',
      },
    },
  },
  plugins: [],
};
