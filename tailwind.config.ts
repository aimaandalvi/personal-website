import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        ink: {
          950: "#25272c",
          900: "#2d3036",
          850: "#373a41",
          800: "#42464e",
        },
        mint: {
          50: "#f4fffb",
          100: "#defcf3",
          200: "#b8f7e4",
          300: "#8debd0",
          400: "#5ed7b9",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
