/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      myPink: {
        light: "#FDE4EA",
        DEFAULT: "#F36A8D",
      },
      myYellow: { DEFAULT: "#FCC172", dark: "#fbb150" },
      myBrown: "#F2EFE6",
      myGreen: "#D2E23D",
      myGray: "#4B4B4B",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      Poppins: ["Poppins"],
      Botanika: ["Botanika-Web"],
    },
    extend: {
      boxShadow: {
        mainPageButton: "0px 1px 13px 4px rgba(0,0,0,0.07)",
      },
      animation: {
        moveUpAnimation: "moveUp 1s ease-in forwards",
        fadeIn: "fadeIn 1.3s ease-in-out forwards",
        navFadeIn: "fadeIn 1s ease-in-out",
        scaleIn: "scaleIn 0.5s cubic-bezier(0.6, 0.01, 0.05, 0.95) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveUp: {
          "0%": { top: "0px" },
          "100%": { top: "-100vh" },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0)",
            transform: "rotate(-180deg)",
          },
          "100%": {
            transform: "scale(1)",
            transform: "rotate(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
