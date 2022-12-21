/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      myPink: "#F36A8D",
      myYellow: "#FCC172",
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
