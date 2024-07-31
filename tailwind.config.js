/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        borderColorDark: "#FFFFFF33", // Define a custom gray color
        borderColorLight: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
