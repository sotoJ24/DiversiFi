/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // More specific patterns to avoid scanning node_modules
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // Includes other source directories if you have them
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}