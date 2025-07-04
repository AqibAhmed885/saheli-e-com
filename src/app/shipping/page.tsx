'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ShippingPage() {
  const [selectedCountry, setSelectedCountry] = useState('US');

  const shippingRates = {
    US: {
      standard: { time: '5-7 business days', cost: 'Free on orders $100+' },
      express: { time: '2-3 business days', cost: '$15' },
      overnight: { time: '1 business day', cost: '$25' }
    },
    CA: {
      standard: { time: '7-10 business days', cost: 'Free on orders $150+' },
      express: { time: '3-5 business days', cost: '$20' }
    },
    EU: {
      standard: { time: '7-14 business days', cost: 'Free on orders $200+' },
      express: { time: '3-7 business days', cost: '$30' }
    },
    INTL: {
      standard: { time: '10-21 business days', cost: 'Free on orders $300+' },
      express: { time: '5-10 business days', cost: '$50' }
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
              SHIPPING INFO
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              We deliver your SAHELI pieces with care and attention to detail, ensuring they arrive in perfect condition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Calculator */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-2xl mb-16"
          >
            <h2 className="text-3xl font-light text-neutral-800 mb-8 tracking-wide text-center">
              Shipping Calculator
            </h2>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-4">
                Select Your Region
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { code: 'US', name: 'United States', flag: '🇺🇸' },
                  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
                  { code: 'EU', name: 'European Union', flag: '🇪🇺' },
                  { code: 'INTL', name: 'International', flag: '🌍' }
                ].map((region) => (
                  <button
                    key={region.code}
                    onClick={() => setSelectedCountry(region.code)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                      selectedCountry === region.code
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-warm-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{region.flag}</div>
                    <div className="text-sm font-medium text-neutral-800">{region.name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Shipping Options for {selectedCountry === 'US' ? 'United States' : selectedCountry === 'CA' ? 'Canada' : selectedCountry === 'EU' ? 'European Union' : 'International'}
              </h3>
              
              {Object.entries(shippingRates[selectedCountry as keyof typeof shippingRates]).map(([method, details]) => (
                <div key={method} className="flex items-center justify-between p-4 bg-gradient-to-br from-cream-50 to-warm-50 rounded-xl">
                  <div>
                    <div className="font-medium text-neutral-800 capitalize">
                      {method} Shipping
                    </div>
                    <div className="text-sm text-neutral-600">
                      {details.time}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-primary-600">
                      {details.cost}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Shipping Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-light text-neutral-800 mb-8 tracking-wide">
                Shipping Details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-3">
                    Processing Time
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    All orders are processed within 1-2 business days. Orders placed on weekends or holidays are processed on the next business day.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-3">
                    Shipping Carriers
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We partner with trusted carriers including FedEx, UPS, and DHL to ensure your orders arrive safely and on time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-3">
                    Packaging
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Each order is carefully packaged in our signature eco-friendly packaging, designed to protect your items while minimizing environmental impact.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-3">
                    Tracking
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    You&rsquo;ll receive a tracking number once your order ships. Track your package anytime through our website or the carrier&rsquo;s tracking system.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Special Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-primary-50 to-cream-50 rounded-2xl p-8">
                <h3 className="text-xl font-medium text-neutral-800 mb-4">
                  White Glove Delivery
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  For orders over $1,000, we offer complimentary white glove delivery service with scheduled delivery and personal styling consultation.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Scheduled delivery appointment</li>
                  <li>• Personal styling consultation</li>
                  <li>• Complimentary alterations consultation</li>
                  <li>• Premium gift wrapping</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-medium text-neutral-800 mb-4">
                  Gift Services
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Make your gift extra special with our premium gift services.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Luxury gift wrapping ($15)</li>
                  <li>• Personalized gift message</li>
                  <li>• Gift receipt (price hidden)</li>
                  <li>• Express gift delivery available</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sage-50 to-warm-50 rounded-2xl p-8">
                <h3 className="text-xl font-medium text-neutral-800 mb-4">
                  Sustainable Shipping
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  We&rsquo;re committed to reducing our environmental impact through sustainable shipping practices.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Carbon-neutral shipping options</li>
                  <li>• Recyclable packaging materials</li>
                  <li>• Minimal packaging design</li>
                  <li>• Reusable garment bags</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Shipping */}
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
              INTERNATIONAL SHIPPING
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cream-50 to-warm-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Customs & Duties
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                International customers are responsible for any customs duties, taxes, or fees imposed by their country. These charges are not included in your order total and are collected by the carrier upon delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-cream-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Restricted Countries
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Due to shipping restrictions, we currently cannot ship to certain countries. Please contact our customer service team if you&rsquo;re unsure about shipping to your location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sage-50 to-warm-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Address Requirements
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Please ensure your shipping address is complete and accurate. We cannot be responsible for packages sent to incorrect addresses. All international addresses must include a phone number for customs clearance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
