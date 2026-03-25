import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0d2d5e',
        'navy-deep': '#091f42',
        /** Stitch-style nav / deep blue */
        stitch: {
          nav: '#00183e',
          'nav-dark': '#000c1f',
          surface: '#fcf9f8',
          'surface-container': '#f0eded',
          'on-surface': '#1b1c1c',
          'primary-container': '#0d2d5e',
          'on-primary-muted': '#7c96cd',
        },
        red: '#c0392b',
        'blue-mid': '#1a4a8a',
        body: '#5a6a88',
        'border-light': '#e8ecf3',
        gold: '#e8c547',
      },
      fontFamily: {
        condensed: ['var(--font-barlow-condensed)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 18px 40px -12px rgba(9, 31, 66, 0.18)',
        'lift-lg': '0 28px 60px -16px rgba(9, 31, 66, 0.22)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 50px -12px rgba(13, 45, 94, 0.35)',
        card: '0 4px 24px -4px rgba(9, 31, 66, 0.08), 0 12px 32px -8px rgba(9, 31, 66, 0.06)',
        'card-hover': '0 12px 40px -8px rgba(9, 31, 66, 0.14), 0 4px 16px -4px rgba(192, 57, 43, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-14px) scale(1.02)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(8px, -10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.75' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2.5s infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
