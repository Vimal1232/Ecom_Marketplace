/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#7E36F4",
        secondary: "#111111",
        tertiary: "#282828",
        pure: "#FFFFFF",
        greyishblue: "#5F6980",
        differentpure: "#E3E3E3",
        differentpure2: "#F2F4F7",
        differentpure3: "#F9FAFB",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      vmd: "930px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
