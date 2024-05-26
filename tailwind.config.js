/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#394867",
        button: "#262626",
        red: "#E12855",
        darkblue: "#1F2640",
        red1: '#F56565'
      },
    },
  },
  plugins: [],
};
