/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundRight: "url('/public/right.png')",
      },

      keyframes: {
        modalX: {
          "0%": {
            transform: "scale(50%)",
            transform: "translateX(100%) ",
            opacity: "0",
          },
          "100%": {
            transform: "scale(100%)",
            transform: "translateX(0%) ",
            opacity: "100%",
          },
        },
        bounceX: {
          "0%": {
            transform: "translateX(-25%)",
          },
          "50%": {
            transform: "none",
          },
          "100%": {
            transform: "translateX(-25%)",
          },
        },
      },

      animation: {
        modalAnimate: "modalX 0.5s ease-in-out  ",
        bounceX: "bounceX 1.5s linear  infinite",
      },
    },
  },
  plugins: [],
};
