/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Playfair Display', serif",
      },
      colors: {
        "berk-black": "#0F0F10",
        "berk-white": "#F3F3F3",
        "berk-brown": "#B49A67",
        "berk-blue": "#4E64DF",
        "berk-y1": "#2A2B30",
        "berk-ash": "#47545B",
        "berk-dark-from": "#2D3135",
        "berk-dark-to": "#3E4347",
        "berk-grey": "#28282A",
        "berk-trans": "#828386",
        "berk-red": "#E8423E",
        grey: "#D9D9D9",
      },
      maxWidth: {
        largest: "1530px",
      },
    },
  },
  plugins: [],
};
