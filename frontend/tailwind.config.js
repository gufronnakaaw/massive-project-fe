/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#3C3C3C",
        third: "#FFD685",
        fourth: "#17AB52",
        fifth: "#333333",
        facebook: '#3F57AB',
        upload: '#73BBA3',
        sixth: '#292828'
      },
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}