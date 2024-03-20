/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '3/10': '30%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
      }
    },
  },
  plugins: [],
}