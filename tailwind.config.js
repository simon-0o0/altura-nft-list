const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral50: "#e9eaeb",
        neutral75: "#a4a7ad",
        neutral100: "#7e828b",
        neutral200: "#464d59",
        neutral300: "#202837",
        neutral400: "#161c27",
        neutral500: "#141822",
        yellow50: "#fff8e6",
        yellow75: "#fee499",
        yellow100: "#fed96f",
        yellow200: "#fdc830",
        yellow300: "#fdbd06",
        yellow400: "#b18404",
        yellow500: "#9a7304",
      },
    },
  },
  plugins: [],
};
