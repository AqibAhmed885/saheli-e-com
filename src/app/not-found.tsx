'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-warm-50 to-primary-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cream-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-warm-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-sage-200/25 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] lg:text-[15rem] font-thin text-transparent bg-gradient-to-r from-primary-400 via-cream-500 to-warm-400 bg-clip-text leading-none">
              404
            </h1>
          </motion.div>

          {/* SAHELI Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Logo size="lg" />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              PAGE NOT FOUND
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-neutral-600 mb-6 font-light leading-relaxed max-w-2xl mx-auto">
              It seems you&rsquo;ve wandered off the beaten path. The page you&rsquo;re looking for doesn&rsquo;t exist in our elegant collection.
            </p>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto">
              But don&rsquo;t worry—there&rsquo;s still plenty of timeless beauty to discover.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-500 to-cream-500 text-white hover:from-primary-600 hover:to-cream-600 px-12 py-4 text-sm tracking-widest shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/">RETURN HOME</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white px-12 py-4 text-sm tracking-widest transition-all duration-300"
            >
              <Link href="/products">BROWSE COLLECTION</Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {[
              { name: 'Women', href: '/products?category=women' },
              { name: 'Men', href: '/products?category=men' },
              { name: 'New Arrivals', href: '/products?category=new' },
              { name: 'Contact Us', href: '/contact' }
            ].map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link 
                  href={link.href}
                  className="block p-4 bg-white/60 backdrop-blur-sm rounded-xl text-neutral-700 hover:text-primary-600 hover:bg-white/80 transition-all duration-300 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Fashion Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 hidden lg:block"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop"
              alt="Fashion illustration"
              fill
              className="object-cover rounded-full opacity-20 blur-sm"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute -top-20 -left-20 w-64 h-64 hidden lg:block"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop"
              alt="Fashion illustration"
              fill
              className="object-cover rounded-full opacity-20 blur-sm"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-primary-300 to-cream-300 rounded-full opacity-30"
      />
      
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          rotate: [0, -5, 0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-br from-warm-300 to-sage-300 rounded-full opacity-25"
      />

      <motion.div
        animate={{ 
          y: [-15, 15, -15],
          x: [-10, 10, -10]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-2/3 right-1/2 w-4 h-4 bg-gradient-to-br from-cream-400 to-primary-400 rounded-full opacity-20"
      />
    </div>
  );
}
