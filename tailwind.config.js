/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        maxDesktop: "1440px",
      },
      colors: {
        blue: {
          100: "#DDDDF0",
          300: "#6C6DF3",
          400: "#1B1B96",
          500: "#1D1B9D",
          700: "#232536",
          800: "#1C1B9D",
          900: "#353345",
        },
        orange: {
          100: "#F0680A99",
          200: "#F0680A",
          300: "#FF5C00",
          500: "#FF6006",
          600: "#E96024",
        },
        gray: {
          100: "#F6F8FD",
          200: "#7C7C7C",
          300: "#FBFBFB",
          200: "#757385",
          300: "#515151",
          400: "#EDEDED",
          500: "#2A2739",
          600: "#CBD6E2",
          700: "#495057",
        },
        black: {
          300: "#0D0B1A",
        },
        white: "#ffffff",
        border: {
          100: "#F3F3F366",
        },
        neutral: {
          100: "#F2F5FC",
          300: "#757385",
        },
        red: {
          400: "#FF0000",
        },
      },
      fontFamily: {
        rajdhani: "var(--font-family-rajdhani)",
        roboto: "var(--font-family-roboto)",
        archivo: "var(--font-family-archivo)",
      },
      spacing: {
        636: "39.75rem",
      },
      rotate: {
        50: "-45deg",
      },
      keyframes: {
        showMenu: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        "show-menu": "showMenu 0.5s linear",
      },
      backgroundImage: {
        "banner-form": "url('/banner-principal-form.png')",
        "banner-form-mob": "url('/banner-principal-form-mobile.png')",
        "banner-product": "url('/banner-product.png')",
        "banner-product-mob": "url('/banner-product-mob.png')",
        "banner-form-solutions": "url('/banner-principal-form-solutions.png')",
        "button-next": "url('/button-next.svg')",
        "solutions-card": "url('/solutions-card-background.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(227 227 227)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(255 92 0)",
            borderRadius: "10px",
          },
        },
      };
      addUtilities(newUtilities, []);
    },
  ],
};
