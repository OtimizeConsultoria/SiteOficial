import type { Config } from "tailwindcss";

export default {
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
        primary: "#059bda",
        secondary: "#38b6ff",
        neutralBlack: "#000",
        neutralWhite: "#fff",
        neutralGray: "#212121"
      },
    },
  },
  plugins: [],
} satisfies Config;
