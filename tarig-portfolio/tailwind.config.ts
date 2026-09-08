import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--c-bg)",
          surface: "var(--c-surface)",
          alt: "var(--c-surface-alt)",
        },
        ink: {
          DEFAULT: "var(--c-ink)",
          muted: "var(--c-ink-muted)",
          faint: "var(--c-ink-faint)",
        },
        line: "var(--c-line)",
        accent: {
          DEFAULT: "#4FD1C5",
          soft: "#8FE9DF",
          dim: "#1E5A54",
        },
        amber: {
          DEFAULT: "#F5A524",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
