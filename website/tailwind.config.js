const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      colors: {
        odinblue: "#0e76bb",
        odinred: "#cc3d36",
      },
    },
    fontFamily: {
      sans: ["Verdana"],
    },
    transitionDuration: {
      0: "0ms",
      200: "200ms",
      500: "500ms",
      1000: "1000ms",
      2000: "2000ms",
      3000: "3000ms",
    },
  },
  plugins: [],
};
