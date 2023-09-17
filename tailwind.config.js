/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1363FF",
        customRed: "#FFE7DD",
        customYello: "#FFF6DB",
        customGreen: "#E0F9E3",
        customPink: "#F9ECFF",
      },
    },
  },
  plugins: [],
};
