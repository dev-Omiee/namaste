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
        gold: "#c9a84c",
        "gold-light": "#e8c97a",
        teal: "#1a7a6e",
        "teal-light": "#2ab5a0",
        "peacock-blue": "#1b4f72",
        "peacock-green": "#0d6b5e",
        cream: "#f5edd8",
        dark: "#0a0a0f",
        dark2: "#111118",
        dark3: "#161622",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
        cormorant: ["var(--font-cormorant)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
export default config;
