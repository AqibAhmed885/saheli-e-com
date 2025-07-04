import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// SAHELI Brand Theme Utilities
export const saheliTheme = {
  colors: {
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
  gradients: {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-neutral-800 to-neutral-900',
    warm: 'from-primary-400 to-accent-500',
    nature: 'from-sage-500 to-sage-600',
    elegant: 'from-primary-600 to-accent-600',
  },
  shadows: {
    soft: 'shadow-lg shadow-primary-200/50',
    elegant: 'shadow-xl shadow-neutral-300/30',
    warm: 'shadow-lg shadow-accent-300/40',
  }
};

export function getThemeColor(color: string, shade: number = 500): string {
  const colorMap = saheliTheme.colors as Record<string, Record<number, string>>;
  return colorMap[color]?.[shade] || color;
}

export function getRandomThemeGradient(): string {
  const gradients = Object.values(saheliTheme.gradients);
  return gradients[Math.floor(Math.random() * gradients.length)];
}
