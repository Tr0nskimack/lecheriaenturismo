/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        fondo : "#735bd3",
        letra : "#f9f6a6"
      }
    },
  },
  plugins: []
}