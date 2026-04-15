/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // A lovely Aspen blue tone approximation
        accent: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
