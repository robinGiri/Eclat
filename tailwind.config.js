// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        peignot: ['Peignot', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'admin-blue': "#1900D5",
        gray: {
          10: "#EFEFEF",
          30: "#D9D9D9",
          50: "#424242",
          100: "#343434",
        },
      },
      boxShadow: {
        'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
