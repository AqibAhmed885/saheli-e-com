'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

// Mock wishlist data - in a real app, this would come from your database/API
const mockWishlistItems = [
  {
    id: 1,
    name: 'Ethereal Silk Dress',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=600&fit=crop&crop=center',
    brand: 'SAHELI',
    color: 'Champagne',
    size: 'M',
    inStock: true,
    rating: 4.8,
    reviews: 127,
    addedDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Cashmere Wrap Coat',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop&crop=center',
    brand: 'SAHELI',
    color: 'Cream',
    size: 'L',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    addedDate: '2024-01-10',
  },
  {
    id: 3,
    name: 'Vintage Pearl Necklace',
    price: 159,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop&crop=center',
    brand: 'SAHELI',
    color: 'Pearl White',
    size: 'One Size',
    inStock: false,
    rating: 4.7,
    reviews: 203,
    addedDate: '2024-01-05',
  },
  {
    id: 4,
    name: 'Handwoven Silk Scarf',
    price: 129,
    originalPrice: 169,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=600&fit=crop&crop=center',
    brand: 'SAHELI',
    color: 'Dusty Rose',
    size: 'One Size',
    inStock: true,
    rating: 4.6,
    reviews: 156,
    addedDate: '2024-01-02',
  },
  {
    id: 5,
    name: 'Luxury Handbag',
    price: 459,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=600&fit=crop&crop=center',
    brand: 'SAHELI',
    color: 'Camel',
    size: 'One Size',
    inStock: true,
    rating: 4.9,
    reviews: 234,
    addedDate: '2024-01-20',
  },
  {
    id: 6,
    name: 'Knitted Sweater',
    price: 189,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop&crop=center',
    brand: 'SAHELI',
    color: 'Ivory',
    size: 'S',
    inStock: true,
    rating: 4.5,
    reviews: 89,
    addedDate: '2024-01-18',
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);
  const [isRemoving, setIsRemoving] = useState<number | null>(null);

  const removeFromWishlist = async (itemId: number) => {
    setIsRemoving(itemId);
    // Simulate API call
    setTimeout(() => {
      setWishlistItems(prev => prev.filter(item => item.id !== itemId));
      setIsRemoving(null);
    }, 500);
  };

  const moveToCart = (itemId: number) => {
    // In a real app, this would add to cart and optionally remove from wishlist
    console.log('Moving item to cart:', itemId);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50">
        <div className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-100 to-cream-200 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-light text-neutral-900 mb-4 tracking-wide">Your Wishlist is Empty</h1>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Start building your collection of dream pieces. Save items you love and come back to them anytime.
              </p>
              <Link href="/products">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                  Discover Our Collection
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-light text-neutral-900 mb-4 tracking-wide">Your Wishlist</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Curated pieces that caught your eye. Transform your dreams into reality.
            </p>
            <div className="mt-6 flex items-center justify-center text-sm text-neutral-500">
              <span>{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wishlist Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="bg-white/90 text-neutral-800 px-4 py-2 rounded-full font-medium text-sm">
                        Out of Stock
                      </span>
                    </div>
                  )}
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    disabled={isRemoving === item.id}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 group/btn"
                  >
                    {isRemoving === item.id ? (
                      <div className="w-4 h-4 border-2 border-neutral-300 border-t-neutral-800 rounded-full animate-spin" />
                    ) : (
                      <svg className="w-5 h-5 text-neutral-600 group-hover/btn:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>

                  {/* Sale Badge */}
                  {item.originalPrice > item.price && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      {item.brand}
                    </span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm text-neutral-600">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xl font-semibold text-neutral-900">
                      ${item.price}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-neutral-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={() => moveToCart(item.id)}
                      disabled={!item.inStock}
                      className={`w-full ${
                        item.inStock 
                          ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                          : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                      }`}
                    >
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    
                    <Link href={`/products/${item.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <span className="text-xs text-neutral-500">
                      Added {new Date(item.addedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Continue Shopping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/products">
            <Button variant="outline" size="lg" className="bg-white hover:bg-cream-50">
              Continue Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
