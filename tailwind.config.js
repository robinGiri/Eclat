// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        peignot: ["Peignot", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "admin-blue": "#1900D5",
        "order-tracker": "#357a38",
        gray: {
          10: "#EFEFEF",
          30: "#D9D9D9",
          50: "#424242",
          100: "#343434",
        },
      },
      boxShadow: {
        "custom-shadow":
          "-2px 2px 20px 8px rgba(0,0,0,0.04)",
        "custom-nav-shadow": "0px 2px 5px rgba(0, 0, 0, 0.036)",
      },
    },
  },
  plugins: [],
};
