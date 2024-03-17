/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Robo: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "412px",
        // => @media (min-width: 412px) { ... }
      },
    },
  },
  plugins: [],
};
