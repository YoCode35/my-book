import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',   
      'lg': '1024px',  
      'xl': '1280px',  
      '2xl': '1536px', 
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      colors: {
        navBackground: "#ccc",
        navLinkInactive: "#ccc",
        navLinkHover: "#fff000",
        LinkInactive: "#4d94ff",
        LinkHover: "#fff000",
        titlePrimary: "#ffffff",
        titleAccent: "#ff5733",
        buttonColorBkgd: "#4d94ff",
        colorChart: "#fff000",
        blueNight: "#0f202e",
        error: "red-500",
      },
      boxShadow: {
        'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
        clash: ['var(--font-ClashDisplay-Regular)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        strong: "4px 4px 6px rgba(0, 0, 0, 0.7)",
      },
      fontSize: {
        'xxxs': '8px',
        'xxs': '10px',
      },
    },
  },
  plugins: [],
} satisfies Config;
