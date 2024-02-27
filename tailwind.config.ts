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
      },
    },
  },
  plugins: [],
};
export default config;
