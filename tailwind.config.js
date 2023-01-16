/** @type {import('tailwindcss').Config} */
module.exports = {
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
        modal: {
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
      },

      animation: { modalAnime: "modal 0.5s ease-in-out " },

      keyframes: {
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
      animation: { bounceX: "bounceX 1.5s linear  infinite" },
    },
  },
  plugins: [],
};
