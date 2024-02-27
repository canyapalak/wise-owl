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
          light: "#e85e30",
        },
        bluegray: "#b3cbe6",
      },
    },
  },
  plugins: [],
};
export default config;
