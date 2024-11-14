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
        primary : "#ffb5de",
        secundary : "#1E293B",
        accent: "#ff008b"
      }
    },
  },
  plugins: [],
}
