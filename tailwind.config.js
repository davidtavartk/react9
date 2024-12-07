/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        c1: "#07043B"
      },
      dropShadow: {
        custom: "2px 3px 6px rgba(0, 0, 0, 0.16)",
      }
    },
    plugins: [],
  },
};
