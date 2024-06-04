import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#323942",
        native: {
          gray: "#7D8278",
          gold: "#E3C797",
          rust: "#BF5347",
        },
      },
      keyframes: {
        "logo-cloud": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
      },
      animation: {
        "logo-cloud": "logo-cloud 30s linear infinite", // Adjust duration and timing as needed for your design.
      },
    },
  },
};

export default config;
