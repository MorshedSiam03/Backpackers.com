/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fira: 'Fira Sans, sans-serif' // Add the custom font family
      }
    },
  },
  plugins: [require('daisyui'),],
}

