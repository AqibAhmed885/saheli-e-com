'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function ReturnsPage() {
  const [returnForm, setReturnForm] = useState({
    orderNumber: '',
    email: '',
    reason: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setReturnForm({
      ...returnForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle return request submission
    alert('Return request submitted successfully! You will receive an email with return instructions.');
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
              RETURNS & EXCHANGES
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              We want you to love your SAHELI pieces. If something isn&rsquo;t quite right, we&rsquo;re here to help make it perfect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "30-Day Window",
                description: "Return or exchange items within 30 days of delivery for a full refund or store credit."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Free Returns",
                description: "Complimentary return shipping on all orders over $200. Pre-paid return labels included."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "Easy Exchange",
                description: "Exchange for a different size or color. We&rsquo;ll send your new item as soon as we receive the original."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-cream-200 transition-all duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              HOW TO RETURN
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Start Your Return",
                description: "Fill out the return form below or contact our customer service team. You&rsquo;ll receive a return authorization number and pre-paid shipping label."
              },
              {
                step: "02",
                title: "Package Your Items",
                description: "Place items in their original packaging with tags attached. Include the return slip and any gift receipts in the package."
              },
              {
                step: "03",
                title: "Ship It Back",
                description: "Attach the pre-paid label to your package and drop it off at any authorized shipping location or schedule a pickup."
              },
              {
                step: "04",
                title: "Get Your Refund",
                description: "Once we receive and process your return, your refund will be issued to the original payment method within 3-5 business days."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-cream-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Form */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-light text-neutral-800 mb-8 tracking-wide text-center">
              Start a Return
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="orderNumber" className="block text-sm font-medium text-neutral-700 mb-2">
                    Order Number *
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    value={returnForm.orderNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., SAHELI-12345"
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={returnForm.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-neutral-700 mb-2">
                  Reason for Return *
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={returnForm.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="wrong-size">Wrong Size</option>
                  <option value="defective">Defective Item</option>
                  <option value="not-as-described">Not as Described</option>
                  <option value="changed-mind">Changed My Mind</option>
                  <option value="damaged-shipping">Damaged in Shipping</option>
                  <option value="exchange">Exchange for Different Item</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-neutral-700 mb-2">
                  Additional Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={returnForm.comments}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us more about your return request..."
                  className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary-500 to-cream-500 hover:from-primary-600 hover:to-cream-600 text-white py-4 text-sm tracking-widest transition-all duration-300"
              >
                Submit Return Request
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Return Policy Details */}
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
              RETURN POLICY DETAILS
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
                Eligible Items
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Items must be in original condition with tags attached</li>
                <li>• Unworn and unwashed merchandise only</li>
                <li>• Original packaging and accessories must be included</li>
                <li>• Returns must be initiated within 30 days of delivery</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-cream-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Non-Returnable Items
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Custom or personalized items</li>
                <li>• Intimates, swimwear, and undergarments</li>
                <li>• Final sale items (marked as such)</li>
                <li>• Items damaged by normal wear</li>
                <li>• Gift cards and digital products</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sage-50 to-warm-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Refund Information
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Refunds processed to original payment method</li>
                <li>• Store credit available for faster processing</li>
                <li>• International returns may take 7-14 business days</li>
                <li>• Original shipping costs are non-refundable</li>
                <li>• Exchange shipping is complimentary</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-warm-50 to-cream-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Need Help?
              </h3>
              <p className="text-neutral-600 mb-4">
                Our customer service team is here to help with any questions about returns or exchanges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="sm" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 text-xs tracking-wider"
                >
                  Contact Support
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-2 text-xs tracking-wider"
                >
                  Live Chat
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
