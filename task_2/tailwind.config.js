/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      color: {
        gray: "#F4F0EC",
      },
    },
  },
  plugins: [],
}