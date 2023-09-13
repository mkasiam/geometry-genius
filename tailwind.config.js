/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },

      // ...
    },
  },
};
