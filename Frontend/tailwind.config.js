/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode support
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        colors: {
          // Primary yellow and hover
          primaryYellow: "#F7B500",
          hoverYellow: "#F9A825",

          // Dark Mode and Light Mode Colors
          blackScreen: "#121212",
          whiteScreen: "#dddddd",
          darkComponent: "#1E1E1E",
          lightComponent: "#FFFFFF",
          lightText: "#E4E4E4",
          darkText: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
