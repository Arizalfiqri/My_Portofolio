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
        background: "#05050A", // Very dark navy/black
        foreground: "#f0f0f0",
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        secondary: {
          DEFAULT: '#8b5cf6', // violet-500
          glow: 'rgba(139, 92, 246, 0.5)',
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
          glow: 'rgba(6, 182, 212, 0.5)',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.05)',
        }
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.7', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
