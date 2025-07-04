import React from 'react';

export function Favicon() {
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <defs>
        <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dfc894" />
          <stop offset="50%" stopColor="#d1b57a" />
          <stop offset="100%" stopColor="#bf9e5f" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="16" cy="16" r="15" fill="url(#faviconGradient)" stroke="#bf9e5f" strokeWidth="1" />
      
      {/* Simplified 'S' */}
      <path 
        d="M 10 9 Q 13 7 16 9 Q 19 11 16 14 Q 13 16 16 18 Q 19 20 16 22 Q 13 24 10 22" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      
      {/* Small decorative dots */}
      <circle cx="8" cy="8" r="1" fill="#ffffff" opacity="0.7" />
      <circle cx="24" cy="8" r="1" fill="#ffffff" opacity="0.7" />
      <circle cx="8" cy="24" r="1" fill="#ffffff" opacity="0.7" />
      <circle cx="24" cy="24" r="1" fill="#ffffff" opacity="0.7" />
    </svg>
  );
}

// Logo for different contexts
export function BrandMark({ 
  size = 'md', 
  className = '',
  showText = true 
}: { 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}) {
  const sizeClasses = {
    sm: showText ? 'h-8' : 'h-6',
    md: showText ? 'h-10' : 'h-8',
    lg: showText ? 'h-12' : 'h-10'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={sizeClasses[size]}>
        <Favicon />
      </div>
      {showText && (
        <span className="text-lg font-light text-neutral-900 tracking-[0.3em]">
          SAHELI
        </span>
      )}
    </div>
  );
}
