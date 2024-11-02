/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ciano': '#0bcfe0',
        'rosa' : '#e00b4b'
      }
    },
  },
  plugins: [],
}

