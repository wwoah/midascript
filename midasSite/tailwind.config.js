/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `radial-gradient(
          ellipse farthest-corner at right bottom,
          #fedb37 0%,
          #fdb931 8%,
          #9f7928 30%,
          #8a6e2f 40%,
          transparent 80%
        ),
        radial-gradient(
          ellipse farthest-corner at left top,
          #ffffff 0%,
          #ffffac 8%,
          #d1b464 25%,
          #5d4a1f 62.5%,
          #5d4a1f 100%
        )`,
      },
    },
    colors: {
      eggshell: "rgb(250, 241, 224)",
      black: "black",
      transparent: "transparent",
      white: "#ffffff",
      grey: "rgb(186, 185, 182)",
    },
  },
  plugins: [],
};
