/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DBE2EF", // Light
          dark: "#7FC7D9", // Dark
        },
        secondary: {
          DEFAULT: "#3F72AF", // Light
          dark: "#01020B", // Dark
        },
        steelBlue: {
          DEFAULT: "#365486", // Light
          dark: "#0F1035", // Dark
        },
        midnightBlue: {
          DEFAULT: "#0F1035", // Light
          dark: "#01020B", // Dark
        },
        danger: {
          DEFAULT: "#e74c3c", // Light
          dark: "#c0392b", // Dark
        },
        alert: {
          DEFAULT: "#ffcc00", // Light
          dark: "#e6b800", // Dark
        },
        info: {
          DEFAULT: "#3498db", // Light
          dark: "#1f618d", // Dark
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
