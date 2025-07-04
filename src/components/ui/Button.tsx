import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';
    
    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400 shadow-sm hover:shadow-md border border-primary-500',
      secondary: 'bg-warm-100 text-warm-800 hover:bg-warm-200 focus:ring-warm-400 shadow-sm hover:shadow-md border border-warm-200',
      outline: 'border-2 border-primary-500 bg-transparent text-primary-700 hover:bg-primary-500 hover:text-white focus:ring-primary-400 transition-all duration-200',
      ghost: 'bg-transparent text-primary-700 hover:bg-primary-50 focus:ring-primary-400',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm tracking-wide',
      md: 'h-11 px-6 text-base tracking-wide',
      lg: 'h-13 px-8 text-lg tracking-wide',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
