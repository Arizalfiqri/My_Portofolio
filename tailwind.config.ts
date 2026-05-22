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
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        'dark-bg': "rgb(var(--dark-bg) / <alpha-value>)",
        'dark-surface': "rgb(var(--dark-surface) / <alpha-value>)",
        'dark-card': "rgb(var(--dark-card) / <alpha-value>)",
        'dark-text': "rgb(var(--dark-text) / <alpha-value>)",
        'dark-muted': "rgb(var(--dark-muted) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          light: "rgb(var(--primary) / 0.85)",
          dark: "rgb(var(--primary) / 0.95)",
          glow: "rgb(var(--primary) / 0.15)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          light: "rgb(var(--secondary) / 0.85)",
          dark: "rgb(var(--secondary) / 0.95)",
          glow: "rgb(var(--secondary) / 0.15)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          light: "rgb(var(--accent) / 0.85)",
          dark: "rgb(var(--accent) / 0.95)",
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(45, 49, 66, 0.08)',
          hover: 'rgba(255, 255, 255, 0.9)',
        },
        muted: "rgb(var(--dark-muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(45,49,66,0.04), 0 4px 12px rgba(45,49,66,0.06)',
        'card-hover': '0 8px 25px rgba(45,49,66,0.1), 0 4px 10px rgba(45,49,66,0.06)',
        'card-depth': '0 10px 30px rgba(0,0,0,0.05)',
        'warm': '0 8px 30px rgb(var(--primary) / 0.12)',
        'warm-lg': '0 12px 40px rgb(var(--primary) / 0.18)',
        'dark-card': '0 4px 20px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)',
        'dark-card-hover': '0 8px 30px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.3)',
        'dark-glow': '0 0 30px rgb(var(--primary) / 0.1)',
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
