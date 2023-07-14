/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: ['Hind Siliguri', "sans-serif"],
      },
      colors: {
        pm: {
          yellow: "#FFFAC2",
          "green-1": "#5DE4C7",
          "green-2": "#5FB3A1",
          "green-3": "#42675A",
          skyblue: "#89DDFF",
          "bluegray-1": "#91B4D5",
          "bluegray-2": "#7390AA",
          "pink-1": "#F087BD",
          "pink-2": "#D0679D",
          "gray-1": "#A6ACCD",
          "gray-2": "#767C9D",
          "dark-1": "#303340",
          "dark-2": "#1B1E28",
          light: "#E4F0FB",
          lightgreen: "#31E981",
          bgwhite: "#D8E4FF",
          white: "#FFFFFF"
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
}
