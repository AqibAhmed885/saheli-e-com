import React from 'react';

interface LogoProps {
  variant?: 'default' | 'icon' | 'wordmark' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export function Logo({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  showTagline = true 
}: LogoProps) {
  
  const sizeClasses = {
    sm: {
      icon: 'w-8 h-8',
      text: 'text-lg',
      tagline: 'text-xs'
    },
    md: {
      icon: 'w-10 h-10',
      text: 'text-2xl',
      tagline: 'text-sm'
    },
    lg: {
      icon: 'w-12 h-12',
      text: 'text-3xl',
      tagline: 'text-base'
    },
    xl: {
      icon: 'w-16 h-16',
      text: 'text-4xl',
      tagline: 'text-lg'
    }
  };

  const sizes = sizeClasses[size];

  // Icon-only version
  if (variant === 'icon') {
    return (
      <div className={`${sizes.icon} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dfc894" />
              <stop offset="50%" stopColor="#d1b57a" />
              <stop offset="100%" stopColor="#bf9e5f" />
            </linearGradient>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f9f4e8" />
            </linearGradient>
          </defs>
          
          {/* Outer decorative circle */}
          <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" stroke="#bf9e5f" strokeWidth="2" />
          
          {/* Inner decorative elements */}
          <circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
          
          {/* Stylized 'S' */}
          <path 
            d="M 35 30 Q 45 25 55 30 Q 65 35 55 45 Q 45 50 55 55 Q 65 60 55 65 Q 45 70 35 65" 
            fill="none" 
            stroke="url(#textGradient)" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          
          {/* Decorative dots */}
          <circle cx="30" cy="25" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="70" cy="25" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="30" cy="75" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="70" cy="75" r="2" fill="#ffffff" opacity="0.7" />
        </svg>
      </div>
    );
  }

  // Wordmark-only version
  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className={`${sizes.text} font-light text-neutral-900 tracking-[0.3em] leading-tight`}>
          SAHELI
        </span>
        {showTagline && (
          <span className={`${sizes.tagline} text-neutral-600 font-light italic -mt-1 tracking-wider`}>
            by AxS
          </span>
        )}
      </div>
    );
  }

  // Stacked version (icon above text)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center space-y-2 ${className}`}>
        <div className={sizes.icon}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dfc894" />
                <stop offset="50%" stopColor="#d1b57a" />
                <stop offset="100%" stopColor="#bf9e5f" />
              </linearGradient>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f9f4e8" />
              </linearGradient>
            </defs>
            
            <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" stroke="#bf9e5f" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
            
            <path 
              d="M 35 30 Q 45 25 55 30 Q 65 35 55 45 Q 45 50 55 55 Q 65 60 55 65 Q 45 70 35 65" 
              fill="none" 
              stroke="url(#textGradient)" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            
            <circle cx="30" cy="25" r="2" fill="#ffffff" opacity="0.7" />
            <circle cx="70" cy="25" r="2" fill="#ffffff" opacity="0.7" />
            <circle cx="30" cy="75" r="2" fill="#ffffff" opacity="0.7" />
            <circle cx="70" cy="75" r="2" fill="#ffffff" opacity="0.7" />
          </svg>
        </div>
        
        <div className="flex flex-col items-center">
          <span className={`${sizes.text} font-light text-neutral-900 tracking-[0.3em] leading-tight`}>
            SAHELI
          </span>
          {showTagline && (
            <span className={`${sizes.tagline} text-neutral-600 font-light italic -mt-1 tracking-wider`}>
              by AxS
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default horizontal version
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizes.icon} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dfc894" />
              <stop offset="50%" stopColor="#d1b57a" />
              <stop offset="100%" stopColor="#bf9e5f" />
            </linearGradient>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f9f4e8" />
            </linearGradient>
          </defs>
          
          {/* Outer decorative circle */}
          <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" stroke="#bf9e5f" strokeWidth="2" />
          
          {/* Inner decorative elements */}
          <circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
          
          {/* Stylized 'S' */}
          <path 
            d="M 35 30 Q 45 25 55 30 Q 65 35 55 45 Q 45 50 55 55 Q 65 60 55 65 Q 45 70 35 65" 
            fill="none" 
            stroke="url(#textGradient)" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          
          {/* Decorative dots */}
          <circle cx="30" cy="25" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="70" cy="25" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="30" cy="75" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="70" cy="75" r="2" fill="#ffffff" opacity="0.7" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span className={`${sizes.text} font-light text-neutral-900 tracking-[0.3em] leading-tight`}>
          SAHELI
        </span>
        {showTagline && (
          <span className={`${sizes.tagline} text-neutral-600 font-light italic -mt-1 tracking-wider`}>
            by AxS
          </span>
        )}
      </div>
    </div>
  );
}
