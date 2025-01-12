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
      screens: {
        'xsm': '375px',
        'xxl': '1440px',
      },
      colors: {
        navBackground: "#ccc", 
        boxShadow: {
          'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.5)',
        },
        navText: "#fff000",
        navTitle: "#2c3e50",
        navLinkInactive: "#ccc",
        navLinkHover: "#fff000",
        titlePrimary: "#ffffff",
        titleAccent: "#ff5733",
        buttonColorBkgd: "#4d94ff",
        colorChart:"#fff000",
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
        clash: ['var(--font-clash-display)', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title-lg': ['4rem', '1.2'],
        'title-sm': ['2rem', '1.5'],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        strong: "4px 4px 6px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
} satisfies Config;
