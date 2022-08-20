/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  mode: "Jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        robotoo: ["Roboto", "sans-serif"],
        godman: ["Goldman", "cursive"],
      },
    },
  },
  plugins: [],
};
