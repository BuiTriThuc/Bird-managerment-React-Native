/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/components/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/pages/**/**/*.{js,jsx,ts,tsx}",
    "./src/components/layout/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
