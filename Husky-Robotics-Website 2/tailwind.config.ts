import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        husky: {
          ink: "#f3f7fb",
          muted: "#9eacbc",
          navy: "#071221",
          panel: "#111c2d",
          panel2: "#18263a",
          line: "#2a3b54",
          green: "#22c766",
          greenDark: "#128545",
          red: "#ef4444",
          blue: "#38bdf8",
          amber: "#f8c14a",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,199,102,.35), 0 24px 80px rgba(0,0,0,.28)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
