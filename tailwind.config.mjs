// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SAHELI Brand Colors - Exact palette from the brand image
        primary: {
          50: '#fefdfb',
          100: '#fdfbf6',
          200: '#f9f4e8',
          300: '#f3ebd5',
          400: '#ebddb8',
          500: '#dfc894', // Main brand color - warm golden cream
          600: '#d1b57a',
          700: '#bf9e5f',
          800: '#9c8249',
          900: '#826b3c',
        },
        cream: {
          50: '#fffef9',
          100: '#fffcf0',
          200: '#fef7dc',
          300: '#fdefbf',
          400: '#fbe497',
          500: '#f7d56a', // Rich cream from the image
          600: '#e9c247',
          700: '#d4aa2e',
          800: '#b08b23',
          900: '#8f6f1d',
        },
        warm: {
          50: '#faf9f7',
          100: '#f4f2ee',
          200: '#e9e4db',
          300: '#dbd2c3',
          400: '#c9bba4',
          500: '#b5a082', // Warm beige from image
          600: '#a08863',
          700: '#887149',
          800: '#6f5d3c',
          900: '#5c4d32',
        },
        sage: {
          50: '#f7f8f6',
          100: '#eef0eb',
          200: '#dce1d4',
          300: '#c4ccb4',
          400: '#a8b18f',
          500: '#8e966e', // Sage green accent from image
          600: '#787f5a',
          700: '#63674a',
          800: '#52543e',
          900: '#444634',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f2',
          200: '#e8e7e4',
          300: '#d7d5d0',
          400: '#bfbcb5',
          500: '#a39e94', // Soft neutral
          600: '#8b857a',
          700: '#746f65',
          800: '#605c54',
          900: '#504c46',
        },
        accent: {
          50: '#f9f8f6',
          100: '#f0eeea',
          200: '#e1dcd2',
          300: '#cdc5b4',
          400: '#b5a88f',
          500: '#9e8b6e', // Sophisticated accent
          600: '#8a7559',
          700: '#73614a',
          800: '#5e503e',
          900: '#4e4235',
        },
      },
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    forms,
    aspectRatio,
    typography,
  ],
};

export default config;