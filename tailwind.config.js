const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      hd: "1920px",
    },
    fontFamily: {
      main: ["Noto Sans"],
      title: ["IBM Plex Sans"]
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        green: colors.teal,
        orange: colors.amber,
        blue: colors.cyan,
        background: "#f8f8ff",
        colored: "#273469",
        btn: {
          100: "#5C70BF",
          200: "#2A419E",
        },
        highlight: "#09E352",
        promo: {
          100: "#E1F8E1",
          200: "#2A9E36",
        },
      },
      spacing: {
        96: "34rem",
      },
      rotate: {
        5: "5deg",
      },
      extend: {
        colors: {
          "accent-1": "#333",
        },
      },
    },
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      width: ["responsive", "hover", "focus", "active"],
    },
    plugins: [],
  },
};
