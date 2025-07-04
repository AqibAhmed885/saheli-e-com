'use client';

import { useState } from 'react';
import Link from 'next/link';

export function CartIcon() {
  const [cartCount] = useState(2); // This would come from cart context/state

  return (
    <Link href="/cart" className="relative text-gray-700 hover:text-black transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L9 21h6l4.5-3M7 13h10" />
      </svg>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
