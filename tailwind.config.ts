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
        quicksand: ['Quicksand', 'sans-serif'],
        'quicksand-light': ['Quicksand-Light', 'sans-serif'],
        'quicksand-medium': ['Quicksand-Medium', 'sans-serif'],
        'quicksand-regular': ['Quicksand-Regular', 'sans-serif'],
        'quicksand-book': ['Quicksand', 'sans-serif'],
        'quicksand-bold': ['Quicksand', 'sans-serif'],
        'quicksand-bold-oblique': ['Quicksand', 'sans-serif'],
        'quicksand-light-oblique': ['Quicksand', 'sans-serif'],
        'quicksand-book-oblique': ['Quicksand', 'sans-serif'],
        'quicksand-dash': ['Quicksand', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        'rubik-black': ['Rubik', 'sans-serif'],
        'rubik-bold': ['Rubik', 'sans-serif'],
        'rubik-medium': ['Rubik', 'sans-serif'],
        'rubik-regular': ['Rubik', 'sans-serif'],
        clash: ['Clash Display', 'serif'],
        'clash-display': ['Clash Display', 'serif'],
        'clash-display-variable': ['Clash Display Variable', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        'orbitron-black': ['Orbitron-Black', 'sans-serif'],
        'orbitron-bold': ['Orbitron-Bold', 'sans-serif'],
        'orbitron-medium': ['Orbitron-Medium', 'sans-serif'],
        'orbitron-regular': ['Orbitron-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
