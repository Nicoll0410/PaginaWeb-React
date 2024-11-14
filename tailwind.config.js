/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary : "#fb38a2",
        secundary : "#FFFFFF",
        accent: "#ff008b"
      }
    },
  },
  plugins: [],
}
