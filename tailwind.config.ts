import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F5F0", // warm cream
        foreground: "#2D3142", // charcoal
        primary: {
          DEFAULT: '#C84B31', // terracotta
          light: '#E07A5F',
          dark: '#A33B24',
          glow: 'rgba(200, 75, 49, 0.15)',
        },
        secondary: {
          DEFAULT: '#7C9885', // sage green
          light: '#A3BFA8',
          dark: '#5A7A63',
          glow: 'rgba(124, 152, 133, 0.15)',
        },
        accent: {
          DEFAULT: '#D4A574', // warm gold
          light: '#E8C9A0',
          dark: '#B8895A',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(45, 49, 66, 0.08)',
          hover: 'rgba(255, 255, 255, 0.9)',
        },
        muted: '#8D8D9B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(45,49,66,0.04), 0 4px 12px rgba(45,49,66,0.06)',
        'card-hover': '0 4px 16px rgba(45,49,66,0.08), 0 8px 32px rgba(45,49,66,0.06)',
        'warm': '0 8px 30px rgba(200,75,49,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
