import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#F7F5F0", // warm cream
        foreground: "#2D3142", // charcoal
        'dark-bg': '#121212',
        'dark-surface': '#1A1C23',
        'dark-card': '#1F2937',
        'dark-text': '#E2E8F0',
        'dark-muted': '#94A3B8',
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
        'card-hover': '0 8px 25px rgba(45,49,66,0.1), 0 4px 10px rgba(45,49,66,0.06)',
        'card-depth': '0 10px 30px rgba(0,0,0,0.05)',
        'warm': '0 8px 30px rgba(200,75,49,0.12)',
        'warm-lg': '0 12px 40px rgba(200,75,49,0.18)',
        'dark-card': '0 4px 20px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)',
        'dark-card-hover': '0 8px 30px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.3)',
        'dark-glow': '0 0 30px rgba(200,75,49,0.1)',
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
