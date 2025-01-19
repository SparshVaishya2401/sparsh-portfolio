/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-reverse': 'spin 6s linear reverse infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      backgroundSize: {
        '400%': '400%',
      },
    },
  },
  plugins: [],
}