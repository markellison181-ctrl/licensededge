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
        emerald: {
          DEFAULT: "#1a3a2a",
          50: "#2d5e42",
          100: "#28533a",
          200: "#234732",
          300: "#1e3c2a",
          400: "#1a3a2a",
          500: "#152e22",
          600: "#11221a",
          700: "#0c1612",
          800: "#070b0a",
          900: "#030502",
        },
        gold: {
          DEFAULT: "#c9a84c",
          50: "#f4e8c7",
          100: "#f0ddb8",
          200: "#e8cc9a",
          300: "#e0bb7c",
          400: "#c9a84c",
          500: "#b5943c",
          600: "#967b30",
          700: "#715c24",
          800: "#4c3d18",
          900: "#271e0c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
