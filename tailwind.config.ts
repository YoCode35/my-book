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
        navLinkInactive: "#ccc", // Ajout de la couleur grise pour les liens inactifs
        navLinkHover: "#fff000",
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        rubyk: ['Rubyk', 'sans-serif'],
        clash: ['Clash Display', 'serif'],
      },
      /* backgroundImage: {
        'bkgd-black-colored-spots': "url('/img/bkgd_black-&-colored-spots.png')",
      }, */
    },
  },
  plugins: [],
} satisfies Config;
