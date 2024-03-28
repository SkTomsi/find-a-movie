import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-purple": "#5317FF",
        purple: "#6341C4",
        dark: "#090124",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        tooltip_show: {
          "0%": { opacity: "0" }, // Initial state: hidden and transparent
          "15%": { opacity: "0.5" }, // Fade in transition
          "100%": { opacity: "1" }, // Fully visible
        },
      },
      animation: {
        tooltip_show: "tooltip_show 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
