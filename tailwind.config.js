/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      0.5: "0.125rem", // 2px
      1: "0.25rem", // 4px
      1.5: "0.375rem", // 6px
      2: "0.5rem", // 8px
      2.5: "0.625rem", // 10px
      3: "0.75rem", // 12px
      3.5: "0.875rem", // 14px
      4: "1rem", // 16px
      4.5: "1.125rem", // 18px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      7: "1.75rem", // 28px
      8: "2rem", // 32px
      9: "2.25rem", // 36px
      10: "2.5rem", // 40px
      11: "3rem", // 48px
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--theme-color-text-base)",
          distinct: "var(--theme-color-text-distinct)",
          "base-medium": "var(--theme-color-text-base-medium)",
          "base-accent": "var(--theme-color-text-base-accent)",
          "variation-light": "var(--theme-color-text-variation-light)",
          variation: "var(--theme-color-text-variation)",
          bolder: "var(--theme-color-text-bolder)",
          primary: "var(--theme-color-text-primary)",
          error: "var(--theme-color-error)",
          "question-faq": "var(--theme-color-text-faq)",
          "text-orange": "var(--theme-color-text-orange)",
        },
      },
      backgroundColor: {
        skin: {
          default: "var(--theme-background-default)",
          accent: "var(--theme-background-accent)",
          distinct: "var(--theme-background-distinct)",
        },
      },
      screens: {
        mini: "280px",
        mobile: "375px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        maxDesktop: "1440px",
      },
      colors: {
        menu: "var(--theme-menu-color)",
        "orange-button": "var(--theme-color-button-orange)",
        "orange-button-text": "var(--theme-color-text-orange)",

        "theme-primary": {
          300: "#6C6DF3",
          400: "#1B1B96",
          500: "#1D1B9D",
          700: "#232536",
          800: "#1C1B9D",
          900: "#353345",
        },
        "theme-secondary": {
          100: "#F0680A99",
          200: "#F0680A",
          300: "#FF5C00",
          500: "#FF6006",
          600: "#E96024",
        },
        disabled: "var(--theme-background-shelf-disabled)",
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
          100: "#000000",
          300: "#0D0B1A",
        },
        border: {
          100: "#F3F3F366",
        },
        neutral: {
          100: "#F2F5FC",
          200: "#E0E0E0",
          300: "#757385",
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
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        showMenu: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        showCardFaq: {
          "0%": { transform: "translate3d(0, -20px, 0)", opacity: "0" },
          "100%": { transform: "translatez(0px)", opacity: "1" },
        },
        heightCardFaq: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
        fadeInComp: {
          "0%": { opacity: "0", transform: "translate3d(0, 50%, 0)" },
          "100%": {
            opacity: "1",
            transform: "none",
          },
        },
      },
      animation: {
        "show-menu": "showMenu 0.5s linear",
        "animation-faq":
          "showCardFaq .25s cubic-bezier(.215, .61, .355, 1) .1s forwards",
        "height-faq": "heightCardFaq .45s cubic-bezier(.48,-.28,.39,1.33)",
        "fade-components": "fadeInComp 0.6s ",
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
