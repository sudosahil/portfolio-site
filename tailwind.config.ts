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
        bg: "#0e0e12",
        surface: "#16161c",
        surface2: "#1c1c24",
        accent: "#8b8fff",
        "accent-dim": "rgba(139,143,255,0.12)",
        warm: "#ede8df",
        "warm-dim": "rgba(237,232,223,0.08)",
        "warm-border": "rgba(237,232,223,0.15)",
        "text-primary": "#f2f2f8",
        "text-secondary": "#8888a8",
        border: "rgba(255,255,255,0.07)",
        "border-hover": "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
