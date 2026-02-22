/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
          dark: "#a07830",
        },
        teal: {
          peacock: "#1a7a6e",
          light: "#2ab5a0",
        },
        peacock: {
          blue: "#1b4f72",
          green: "#0d6b5e",
        },
        dark: {
          DEFAULT: "#0a0a0f",
          2: "#111118",
          3: "#161622",
        },
        cream: "#f5edd8",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
