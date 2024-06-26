/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.css"],
  theme: {
    extend: {
      screens: {
        xs: { min: "300px", max: "640px" },
        ...defaultTheme.screens,
      },
      colors: {
        primary: "#8053ff",
        secondary: "rgb(104, 104, 104)",
        background: "rgb(38, 15, 92)",
      },
      gridTemplateColumns: {
        2: "repeat(2, minmax(150px, 1fr))",
        MQ2: "repeat(2, minmax(100px, 1fr)",
      },
      gridTemplateRows: {
        3: "repeat(3, auto)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"), // or theme("fontSize.4xl") for larger size
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.gray.900"),
          marginTop: theme("spacing.8"),
          marginBottom: theme("spacing.4"),
        },
        h2: {
          fontSize: theme("fontSize.xl"), // or theme("fontSize.3xl") for larger size
          fontWeight: theme("fontWeight.semibold"),
          color: theme("colors.gray.800"),
          marginTop: theme("spacing.6"),
          marginBottom: theme("spacing.3"),
        },
        h3: {
          fontSize: theme("fontSize.lg"), // or theme("fontSize.2xl") for larger size
          fontWeight: theme("fontWeight.medium"),
          color: theme("colors.gray.700"),
          marginTop: theme("spacing.4"),
          marginBottom: theme("spacing.2"),
        },
      });
    }),
  ],
  fontFamily: {
    "martel-sans": ["Martel Sans", "sans-serif"],
  },
};
