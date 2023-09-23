/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#faf5f1",
        red: "#f41415",
        txt:"#faf5f1",
        sub: "#000000",
      },
    },
  },
  plugins: [],
};
