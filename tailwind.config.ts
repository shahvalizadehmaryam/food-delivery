// Tailwind v4 uses CSS-first config in src/app/globals.css (@theme, @source).
// Colors and design tokens belong there — this file is optional and only kept for IDE hints.
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;