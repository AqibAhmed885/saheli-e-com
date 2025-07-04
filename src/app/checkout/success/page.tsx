'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function CheckoutSuccessPage() {
  useEffect(() => {
    // Clear cart after successful order
    fetch('/api/cart', { method: 'DELETE' })
      .catch(err => console.error('Error clearing cart:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed and you will receive a confirmation email shortly.
          </p>
          
          <div className="space-y-4">
            <Button className="w-full">
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" className="w-full">
              <Link href="/account/orders">View Order History</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
