'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function OrderTrackerPage() {
  const [trackingInfo, setTrackingInfo] = useState({
    orderNumber: '',
    email: ''
  });
  type OrderItem = {
    name: string;
    size: string;
    color: string;
    price: number;
    image: string;
  };

  type TimelineEvent = {
    status: string;
    date: string;
    time: string;
    completed: boolean;
    description: string;
  };

  type ShippingAddress = {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };

  type OrderData = {
    orderNumber: string;
    status: string;
    estimatedDelivery: string;
    trackingNumber: string;
    carrier: string;
    items: OrderItem[];
    timeline: TimelineEvent[];
    shippingAddress: ShippingAddress;
    total: number;
  };

  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingInfo({
      ...trackingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock order data for demonstration
    if (trackingInfo.orderNumber && trackingInfo.email) {
      setOrderData({
        orderNumber: trackingInfo.orderNumber.toUpperCase(),
        status: 'shipped',
        estimatedDelivery: '2024-01-20',
        trackingNumber: 'FX123456789US',
        carrier: 'FedEx Express',
        items: [
          {
            name: 'Silk Draped Blouse',
            size: 'M',
            color: 'Cream',
            price: 189,
            image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop'
          },
          {
            name: 'Linen Palazzo Pants',
            size: 'M',
            color: 'Beige',
            price: 145,
            image: 'https://images.unsplash.com/photo-1571513722275-4b3c0fbde8de?w=150&h=150&fit=crop'
          }
        ],
        timeline: [
          { 
            status: 'Order Placed', 
            date: '2024-01-15', 
            time: '2:30 PM',
            completed: true,
            description: 'Your order has been received and is being processed'
          },
          { 
            status: 'Payment Confirmed', 
            date: '2024-01-15', 
            time: '2:31 PM',
            completed: true,
            description: 'Payment has been successfully processed'
          },
          { 
            status: 'Processing', 
            date: '2024-01-16', 
            time: '10:00 AM',
            completed: true,
            description: 'Your items are being prepared for shipment'
          },
          { 
            status: 'Shipped', 
            date: '2024-01-17', 
            time: '3:45 PM',
            completed: true,
            description: 'Your order has been shipped and is on its way'
          },
          { 
            status: 'In Transit', 
            date: '2024-01-18', 
            time: '8:00 AM',
            completed: true,
            description: 'Package is traveling to your destination'
          },
          { 
            status: 'Out for Delivery', 
            date: '2024-01-20', 
            time: 'Expected',
            completed: false,
            description: 'Package will be delivered today'
          },
          { 
            status: 'Delivered', 
            date: '2024-01-20', 
            time: 'Expected',
            completed: false,
            description: 'Package has been delivered'
          }
        ],
        shippingAddress: {
          name: 'Sarah Johnson',
          address: '123 Fashion Street',
          city: 'New York',
          state: 'NY',
          zip: '10001'
        },
        total: 334
      });
    } else {
      setError('Please check your order number and email address.');
    }

    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'bg-primary-500';
      case 'shipped':
      case 'in transit':
        return 'bg-blue-500';
      case 'out for delivery':
        return 'bg-orange-500';
      case 'delivered':
        return 'bg-green-500';
      default:
        return 'bg-neutral-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-100">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-thin text-neutral-800 mb-6 tracking-[0.3em]">
              TRACK YOUR ORDER
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Stay updated on your SAHELI order&rsquo;s journey from our atelier to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracking Form */}
      {!orderData && (
        <section className="pb-20">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h2 className="text-3xl font-light text-neutral-800 mb-8 tracking-wide text-center">
                Enter Order Details
              </h2>
              
              <form onSubmit={handleTrackOrder} className="space-y-6">
                <div>
                  <label htmlFor="orderNumber" className="block text-sm font-medium text-neutral-700 mb-2">
                    Order Number *
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    value={trackingInfo.orderNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., SAHELI-12345"
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    Found in your order confirmation email
                  </p>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={trackingInfo.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    Email used when placing the order
                  </p>
                </div>
                
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary-500 to-cream-500 hover:from-primary-600 hover:to-cream-600 text-white py-4 text-sm tracking-widest transition-all duration-300"
                >
                  {isLoading ? 'Tracking...' : 'Track My Order'}
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-600 text-center mb-4">
                  Need help finding your order?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-xs tracking-wider"
                  >
                    Contact Support
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-xs tracking-wider"
                  >
                    Check Email
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Order Details */}
      {orderData && (
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Order Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-2xl mb-8"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-light text-neutral-800 mb-2">
                    Order #{orderData.orderNumber}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(orderData.status)}`}>
                      {orderData.status.charAt(0).toUpperCase() + orderData.status.slice(1)}
                    </span>
                    <span className="text-neutral-600 text-sm">
                      Expected delivery: {orderData.estimatedDelivery}
                    </span>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <p className="text-sm text-neutral-600">Tracking Number</p>
                  <p className="font-mono text-lg text-primary-600">{orderData.trackingNumber}</p>
                  <p className="text-sm text-neutral-500">{orderData.carrier}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-neutral-800 mb-2">Shipping Address</h3>
                  <div className="text-neutral-600 text-sm space-y-1">
                    <p>{orderData.shippingAddress.name}</p>
                    <p>{orderData.shippingAddress.address}</p>
                    <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zip}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 mb-2">Order Total</h3>
                  <p className="text-2xl font-light text-neutral-800">${orderData.total}</p>
                  <p className="text-sm text-neutral-600">{orderData.items.length} items</p>
                </div>
              </div>
            </motion.div>

            {/* Order Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-2xl mb-8"
            >
              <h3 className="text-xl font-light text-neutral-800 mb-8 text-center">
                Order Timeline
              </h3>
              
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200"></div>
                
                <div className="space-y-6">
                  {orderData.timeline.map((event: TimelineEvent, index: number) => (
                    <div key={index} className="relative flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                        event.completed ? 'bg-primary-500' : 'bg-neutral-300'
                      }`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h4 className={`text-lg font-medium ${event.completed ? 'text-neutral-800' : 'text-neutral-500'}`}>
                            {event.status}
                          </h4>
                          <div className="text-sm text-neutral-600">
                            {event.date} {event.time && `at ${event.time}`}
                          </div>
                        </div>
                        <p className={`text-sm mt-1 ${event.completed ? 'text-neutral-600' : 'text-neutral-400'}`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Order Items */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-xl font-light text-neutral-800 mb-6">
                Items in this Order
              </h3>
              
              <div className="space-y-4">
                {orderData.items.map((item: OrderItem, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-lg"
                      style={{ width: '64px', height: '64px' }}
                      unoptimized
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-neutral-800">{item.name}</h4>
                      <p className="text-sm text-neutral-600">
                        Size: {item.size} • Color: {item.color}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-neutral-800">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-primary-500 to-cream-500 hover:from-primary-600 hover:to-cream-600 text-white py-3 text-sm tracking-widest"
                  onClick={() => setOrderData(null)}
                >
                  Track Another Order
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-3 text-sm tracking-widest"
                >
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              NEED HELP?
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Live Chat",
                description: "Get instant help from our customer service team.",
                action: "Start Chat"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email Support",
                description: "Send us your questions and we&rsquo;ll respond within 24 hours.",
                action: "Send Email"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Phone Support",
                description: "Call us for immediate assistance with your order.",
                action: "Call Now"
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-cream-50 to-warm-50 rounded-2xl p-8 group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-cream-200 transition-all duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-3">
                  {option.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 text-xs tracking-wider"
                >
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
