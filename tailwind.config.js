module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(246, 80%, 60%)",
          work: "hsl(15, 100%, 70%)",
          play: "hsl(195, 74%, 62%)",
          study: "hsl(348, 100%, 68%)",
          exercise: "hsl(145, 58%, 55%)",
          social: "hsl(264, 64%, 52%)",
          "self-care": "hsl(43, 84%, 65%)",
        },
        secondary: {
          100: "hsl(236, 100%, 87%)",
          200: "hsl(235, 45%, 61%)",
          300: "hsl(235, 46%, 20%)",
          400: "hsl(226, 43%, 10%)",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
