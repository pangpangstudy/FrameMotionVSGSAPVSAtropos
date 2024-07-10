/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "5rem",
        },
        screens: {
          xl: "144rem", // max-width of container for xl screens
        },
      },
    },
  },
  plugins: [],
};
