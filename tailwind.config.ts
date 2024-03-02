import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        brick: {
          default: "#EB4813",
          light: "#F15927",
        },
        gray: {
          default: "#7B7B74",
          light: "#8A8A83",
        },
        navy: {
          default: "#008fb3",
          light: "#00a3cc",
        },
        mustard: {
          default: "#cc8800",
          light: "#e69900",
        },
        red: {
          default: "#e63900",
          light: "#ff4000",
        },
        green: {
          default: "#669900",
          light: "#77b300",
        },
      },
    },
  },
  plugins: [],
};
export default config;
