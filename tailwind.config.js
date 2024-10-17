/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Define your custom font family
        greatVibes: ["Great Vibes", "cursive"],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
      fontStyle: {
        italic: "italic",
        normal: "normal",
      },
    },
  },
  plugins: [],
};
