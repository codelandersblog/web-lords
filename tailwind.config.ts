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
        "primary-light": "#6750A4",
        "on-primary-light": "#FFFFFF",
        "primary-dark": "#D0BCFF",
        "on-primary-dark": "#381E72",
      },
    },
  },
  plugins: [],
};
export default config;
