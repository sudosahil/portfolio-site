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
        // Büro-style warm paper canvas + near-black ink
        paper: "#f4f2ea",
        paper2: "#eceadf",
        ink: "#0d0d0d",
        ink2: "#1a1a1a",
        // Signature accent + playful pops
        red: "#dc3429",
        blue: "#105df1",
        yellow: "#fcee0a",
        // Neutrals
        grey: "#8d8a80",
        "grey-dark": "#393939",
        line: "rgba(13,13,13,0.14)",
        "line-light": "rgba(244,242,234,0.16)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter2: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
