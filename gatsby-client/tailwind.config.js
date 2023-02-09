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
      myYellow: "#FCC172",
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
      animation: {
        moveUpAnimation: "moveUp 1s ease-in forwards",
        fadeIn: "fadeIn 1s ease-in-out",
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
      },
    },
  },
  plugins: [],
};
