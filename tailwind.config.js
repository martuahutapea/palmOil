module.exports = {
  content: [
    "./index.html", // Include your HTML file
    "./src/**/*.{html,js}", // Include other relevant files
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['"Jost"', "sans-serif"],
        lobster: ['"Lobster"', "cursive"],
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%, 100%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
      },
    },
  },
  plugins: [],
};
