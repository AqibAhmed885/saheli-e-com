'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CartIcon } from './CartIcon';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const shopDropdownItems = [
    { name: 'All Products', href: '/products' },
    { name: 'Women', href: '/products?category=women' },
    { name: 'Men', href: '/products?category=men' },
    { name: 'New Arrivals', href: '/products?category=new' },
    { name: 'Sale', href: '/products?category=sale' },
  ];

  const helpDropdownItems = [
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-warm-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-2">
            <Logo size="md" className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Shop Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('shop')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href="/products" 
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 font-medium tracking-wide ${
                  isActiveLink('/products') 
                    ? 'text-primary-700 bg-primary-50' 
                    : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                }`}
              >
                <span>Shop</span>
                <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Shop Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === 'shop' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl border border-warm-200/50 py-3 mt-2"
                  >
                    {shopDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-6 py-3 text-sm transition-colors duration-200 ${
                          isActiveLink(item.href)
                            ? 'text-primary-700 bg-primary-50 font-medium'
                            : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Link */}
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium tracking-wide ${
                isActiveLink('/about') 
                  ? 'text-primary-700 bg-primary-50' 
                  : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
              }`}
            >
              About
            </Link>

            {/* Help Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('help')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 font-medium tracking-wide ${
                  ['/size-guide', '/shipping', '/returns', '/track-order', '/contact'].some(path => isActiveLink(path))
                    ? 'text-primary-700 bg-primary-50' 
                    : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                }`}
              >
                <span>Help</span>
                <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Help Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === 'help' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl border border-warm-200/50 py-3 mt-2"
                  >
                    {helpDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-6 py-3 text-sm transition-colors duration-200 ${
                          isActiveLink(item.href)
                            ? 'text-primary-700 bg-primary-50 font-medium'
                            : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-72 pl-10 pr-4 py-2.5 border border-warm-300 rounded-xl bg-cream-50/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all duration-300 text-sm"
                />
                <svg className="absolute left-3 top-3 w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* User Account */}
            <Link 
              href="/auth/signin" 
              className="p-2.5 text-neutral-700 hover:text-primary-700 hover:bg-cream-50 rounded-xl transition-all duration-300 group"
              title="Account"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Wishlist */}
            <Link 
              href="/wishlist" 
              className={`p-2.5 rounded-xl transition-all duration-300 group ${
                isActiveLink('/wishlist')
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
              }`}
              title="Wishlist"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>

            {/* Cart */}
            <CartIcon />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-neutral-700 hover:text-primary-700 hover:bg-cream-50 rounded-xl transition-all duration-300"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-warm-200/50 bg-white/95 backdrop-blur-md"
            >
              <div className="py-6 px-4">
                {/* Mobile Search */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-3 border border-warm-300 rounded-xl bg-cream-50/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all duration-300"
                    />
                    <svg className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <nav className="space-y-1">
                  {/* Shop Section */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider px-3 py-2">Shop</div>
                    {shopDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isActiveLink(item.href)
                            ? 'text-primary-700 bg-primary-50'
                            : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Other Links */}
                  <div className="space-y-2 pt-4">
                    <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider px-3 py-2">More</div>
                    <Link
                      href="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActiveLink('/about')
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                      }`}
                    >
                      About
                    </Link>
                    {helpDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isActiveLink(item.href)
                            ? 'text-primary-700 bg-primary-50'
                            : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Account Actions */}
                  <div className="pt-6 border-t border-warm-200/50 space-y-2">
                    <Link
                      href="/auth/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary-700 hover:bg-cream-50 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Sign In</span>
                    </Link>
                    <Link
                      href="/wishlist"
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActiveLink('/wishlist')
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-700 hover:bg-cream-50'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>Wishlist</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
