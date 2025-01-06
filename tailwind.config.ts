import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navBackground: "#ccc", 
        boxShadow: {
          'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.5)',
        },
        navText: "#fff000",
        navTitle: "#2c3e50",
        navLinkInactive: "#ccc",
        navLinkHover: "#fff000",
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
        clash: ['var(--font-clash-display)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
