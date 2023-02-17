/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      rotate: {
        '360': '360deg',
        '720' : '720deg',
        '5' : '5deg',
        '2' : '2deg',
      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
