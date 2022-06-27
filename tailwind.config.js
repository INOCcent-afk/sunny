/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/icons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: "#bcbcbc",
      lightGray: "#f5f5f5",

      black: "#000000",
      white: "#ffffff",

      primary: "#333334",
      darkFont: "#887b72",

      darker: "#1c1c1c",

      secondary: "#222222",
    },
  },
  plugins: [],
};
