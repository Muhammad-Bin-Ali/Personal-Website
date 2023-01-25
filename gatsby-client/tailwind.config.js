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
      myBrown: "#E5E1DB",
      myGreen: "#D2E23D",
      myGray: "#4B4B4B",
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
