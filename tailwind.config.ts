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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          DEFAULT: "#c9a96e",
          light: "#d4bc8e",
          dark: "#a88a4e",
          50: "#faf6ee",
          100: "#f0e6cc",
          200: "#e0cc99",
          300: "#d4bc8e",
          400: "#c9a96e",
          500: "#b8944e",
          600: "#a07a3a",
          700: "#815f2d",
          800: "#634824",
          900: "#4a351b",
        },
        luxury: {
          black: "#0a0a0a",
          dark: "#111111",
          card: "#1a1a1a",
          border: "#2a2a2a",
          muted: "#888888",
          silver: "#c0c0c0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
