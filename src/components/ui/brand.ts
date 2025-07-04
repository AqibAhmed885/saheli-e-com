// Brand Assets for SAHELI Fashion
// This file contains all the brand-related components and assets

export { Logo } from './Logo';
export { BrandMark, Favicon } from './BrandMark';
export { LoadingSpinner, BrandLoader } from './LoadingSpinner';

// Brand Colors (for use in JavaScript)
export const brandColors = {
  primary: {
    50: '#fefdfb',
    100: '#fdfbf6',
    200: '#f9f4e8',
    300: '#f3ebd5',
    400: '#ebddb8',
    500: '#dfc894',
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
    500: '#f7d56a',
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
    500: '#b5a082',
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
    500: '#8e966e',
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
    500: '#a39e94',
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
    500: '#9e8b6e',
    600: '#8a7559',
    700: '#73614a',
    800: '#5e503e',
    900: '#4e4235',
  },
};

// Brand Typography
export const brandTypography = {
  fontFamily: {
    primary: ['Geist Sans', 'system-ui', 'sans-serif'],
    mono: ['Geist Mono', 'monospace'],
  },
  letterSpacing: {
    brand: '0.3em',
    tagline: '0.1em',
  },
};

// Brand Spacing
export const brandSpacing = {
  section: {
    sm: '4rem',
    md: '6rem',
    lg: '8rem',
    xl: '10rem',
  },
  component: {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
};

// Brand Animations
export const brandAnimations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Brand Gradients
export const brandGradients = {
  primary: 'bg-gradient-to-r from-primary-500 to-primary-600',
  cream: 'bg-gradient-to-r from-cream-400 to-cream-500',
  warm: 'bg-gradient-to-r from-warm-400 to-warm-500',
  hero: 'bg-gradient-to-br from-cream-50 via-warm-50 to-primary-50',
  card: 'bg-gradient-to-br from-white to-cream-50',
  button: 'bg-gradient-to-r from-primary-600 to-primary-700',
  accent: 'bg-gradient-to-r from-accent-500 to-accent-600',
};

// Brand Shadow Styles
export const brandShadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  brand: 'shadow-lg shadow-primary-500/10',
  warm: 'shadow-lg shadow-warm-500/10',
  cream: 'shadow-lg shadow-cream-500/10',
};

// Brand Border Radius
export const brandRadius = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  full: 'rounded-full',
};

// Utility function to get brand color
export const getBrandColor = (color: keyof typeof brandColors, shade: keyof typeof brandColors.primary) => {
  return brandColors[color][shade];
};

// Utility function to create brand gradient
export const createBrandGradient = (from: string, to: string) => {
  return `bg-gradient-to-r from-${from} to-${to}`;
};
