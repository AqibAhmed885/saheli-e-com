import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 50 50" className="w-full h-full animate-spin">
        <defs>
          <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfc894" />
            <stop offset="50%" stopColor="#d1b57a" />
            <stop offset="100%" stopColor="#bf9e5f" />
          </linearGradient>
        </defs>
        
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#spinnerGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.416"
          strokeDashoffset="31.416"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="2s"
            values="0 31.416;15.708 15.708;0 31.416"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            values="0;-15.708;-31.416"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

// Brand-themed loading screen
export function BrandLoader({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-cream-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dfc894" />
                <stop offset="50%" stopColor="#d1b57a" />
                <stop offset="100%" stopColor="#bf9e5f" />
              </linearGradient>
            </defs>
            
            <circle cx="50" cy="50" r="45" fill="url(#loaderGradient)" stroke="#bf9e5f" strokeWidth="2" />
            
            <circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
            
            <path 
              d="M 35 30 Q 45 25 55 30 Q 65 35 55 45 Q 45 50 55 55 Q 65 60 55 65 Q 45 70 35 65" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="4" 
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="3s"
                values="0 100;50 50;0 100"
                repeatCount="indefinite"
              />
            </path>
            
            <circle cx="30" cy="25" r="2" fill="#ffffff" opacity="0.7">
              <animate attributeName="opacity" dur="2s" values="0.7;0.3;0.7" repeatCount="indefinite" />
            </circle>
            <circle cx="70" cy="25" r="2" fill="#ffffff" opacity="0.7">
              <animate attributeName="opacity" dur="2s" values="0.3;0.7;0.3" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="30" cy="75" r="2" fill="#ffffff" opacity="0.7">
              <animate attributeName="opacity" dur="2s" values="0.7;0.3;0.7" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="70" cy="75" r="2" fill="#ffffff" opacity="0.7">
              <animate attributeName="opacity" dur="2s" values="0.3;0.7;0.3" repeatCount="indefinite" begin="1.5s" />
            </circle>
          </svg>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-light text-neutral-900 tracking-[0.3em]">SAHELI</h2>
          <p className="text-sm text-neutral-600 font-light italic tracking-wider">by AxS</p>
          <p className="text-sm text-neutral-500 mt-4">{message}</p>
        </div>
      </div>
    </div>
  );
}
