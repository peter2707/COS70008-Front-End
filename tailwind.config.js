/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1363FF",
        primaryLight: "#DDEDFF",
        lightRed: "#FFE7DD",
        lightYellow: "#FFF6DB",
        lightGreen: "#E0F9E3",
        lightPink: "#F9ECFF",
        lightPurple: "#9BBFF5",
        darkBlue: "#003C73",
      },
      backgroundImage: {
        "community-participation":
          "url('/public/assets/images/community-participation.jpg')",
      },
    },
  },
  plugins: [],
};
