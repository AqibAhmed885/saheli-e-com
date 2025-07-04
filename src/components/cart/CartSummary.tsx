'use client';

import { CartItem } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface CartSummaryProps {
  items: CartItem[];
  onCheckout: () => void;
  isLoading?: boolean;
}

export function CartSummary({ items, onCheckout, isLoading }: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal ({items.length} items)</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : formatPrice(shipping)}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>
        
        <hr className="my-3" />
        
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {subtotal < 100 && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            Add {formatPrice(100 - subtotal)} more for free shipping!
          </p>
        </div>
      )}

      <Button
        className="w-full mt-6"
        onClick={onCheckout}
        isLoading={isLoading}
        disabled={items.length === 0}
      >
        Proceed to Checkout
      </Button>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Secure checkout with SSL encryption
        </p>
      </div>
    </div>
  );
}
