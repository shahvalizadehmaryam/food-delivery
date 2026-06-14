// Tailwind v4: configuration lives in src/app/globals.css (@import, @source, @theme).
// This file is not used for class scanning — do not add a `content` array here.
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
};

export default config;