'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/types';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop',
      title: 'TIMELESS ELEGANCE',
      subtitle: 'Where sophistication meets sustainability',
      cta: 'EXPLORE COLLECTION'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop',
      title: 'ARTISAN CRAFTED',
      subtitle: 'Every piece tells a story of dedication',
      cta: 'DISCOVER CRAFT'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=1080&fit=crop',
      title: 'SUSTAINABLE LUXURY',
      subtitle: 'Fashion that honors our planet',
      cta: 'SHOP CONSCIOUS'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Mock featured products for now
    const mockProducts = [
      {
        id: '1',
        name: 'Silk Draped Blouse',
        price: 189,
        originalPrice: 240,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
        category: 'women',
        isNew: true,
        isSale: false,
        rating: 4.8,
        reviews: 24,
        description: 'Elegant silk blouse with draped detailing',
        images: [],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Cream', 'Black']
      },
      {
        id: '2',
        name: 'Linen Palazzo Pants',
        price: 145,
        originalPrice: 180,
        image: 'https://i.etsystatic.com/6286575/r/il/c1cef4/3980677748/il_570xN.3980677748_ip4y.jpg',
        category: 'women',
        isNew: false,
        isSale: true,
        rating: 4.6,
        reviews: 18,
        description: 'Comfortable linen palazzo pants',
        images: [],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Beige', 'White']
      },
      {
        id: '3',
        name: 'Cashmere Wrap Dress',
        price: 320,
        originalPrice: 320,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop',
        category: 'women',
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviews: 35,
        description: 'Luxurious cashmere wrap dress',
        images: [],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Camel', 'Cream']
      },
      {
        id: '4',
        name: 'Leather Crossbody Bag',
        price: 195,
        originalPrice: 195,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
        category: 'accessories',
        isNew: false,
        isSale: false,
        rating: 4.7,
        reviews: 42,
        description: 'Handcrafted leather crossbody bag',
        images: [],
        sizes: ['One Size'],
        colors: ['Tan', 'Black']
      }
    ];
    setFeaturedProducts(mockProducts);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setEmail('');
    setIsSubscribing(false);
    alert('Welcome to the SAHELI family! Check your inbox for exclusive offers.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slider Container */}
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
                <div className="max-w-6xl px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* SAHELI Brand */}
                    <div className="mb-8">
                      <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin mb-2 tracking-[0.3em] leading-tight">
                        SAHELI
                      </h1>
                      <p className="text-2xl md:text-3xl font-light tracking-[0.25em] italic opacity-90">
                        by AxS
                      </p>
                    </div>

                    {/* Slide-specific content */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-[0.15em]">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary-500 to-cream-500 text-white hover:from-primary-600 hover:to-cream-600 px-12 py-4 text-sm tracking-widest shadow-2xl hover:shadow-3xl transition-all duration-300 border-0"
                      >
                        <Link href="/products">{slide.cta}</Link>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-white/80 text-white hover:bg-white hover:text-neutral-900 px-12 py-4 text-sm tracking-widest transition-all duration-300 backdrop-blur-sm"
                      >
                        <Link href="/products">NEW ARRIVALS</Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-light tracking-wider mb-2">SCROLL</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cream-50 to-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              CURATED COLLECTIONS
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Explore our thoughtfully curated collections, each piece selected for its timeless appeal and sustainable craftsmanship
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Women', 
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=700&fit=crop',
                href: '/products',
                description: 'Elegant essentials for the modern woman'
              },
              { 
                name: 'Men', 
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop',
                href: '/products',
                description: 'Sophisticated styles for discerning gentlemen'
              },
              { 
                name: 'Accessories', 
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=700&fit=crop',
                href: '/products',
                description: 'Refined details that complete every look'
              },
              { 
                name: 'New Arrivals', 
                image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=700&fit=crop',
                href: '/products',
                description: 'Fresh additions to our collection'
              }
            ].map((category, index) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={category.href} className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-warm-100 aspect-[3/4] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-light tracking-wider mb-2 group-hover:text-primary-200 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90 font-light leading-relaxed group-hover:opacity-100 transition-opacity">
                        {category.description}
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className="mt-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-light tracking-wider">EXPLORE</span>
                        <svg className="w-4 h-4 transform translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              FEATURED ESSENTIALS
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Handpicked pieces that embody our commitment to timeless style and sustainable craftsmanship
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white px-12 py-4 text-sm tracking-widest transition-all duration-300"
            >
              <Link href="/products">DISCOVER MORE</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brand Story / About Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-warm-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
                THE SAHELI STORY
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mb-8"></div>
              <p className="text-xl text-neutral-600 mb-6 font-light leading-relaxed">
                Born from a passion for timeless elegance and sustainable craftsmanship, SAHELI represents more than just fashion&mdash;it&rsquo;s a philosophy.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Each piece in our collection tells a story of dedication, from the skilled artisans who craft them to the sustainable materials we carefully source. We believe that true luxury lies not in excess, but in the perfect balance of beauty, quality, and conscience.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white px-8 py-3 text-sm tracking-widest transition-all duration-300"
              >
                <Link href="/about">DISCOVER OUR STORY</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=750&fit=crop"
                  alt="SAHELI Artisan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-cream-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-warm-400 to-sage-400 rounded-full opacity-15 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values/Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              WHY CHOOSE SAHELI
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              We&rsquo;re committed to creating fashion that&rsquo;s beautiful, sustainable, and ethically made
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Sustainable Materials",
                description: "We source only the finest eco-friendly materials, from organic cotton to recycled fabrics, ensuring our impact on the planet is minimal."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Artisan Craftsmanship",
                description: "Each piece is lovingly handcrafted by skilled artisans who take pride in their work, ensuring exceptional quality and attention to detail."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Timeless Design",
                description: "Our designs transcend seasonal trends, creating pieces that remain elegant and relevant for years to come, reducing fashion waste."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-cream-200 transition-all duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-light text-neutral-800 mb-4 tracking-wide">
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

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Fashion Editor",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R7VS3DWRoHcx4G1Wag8vObDdRt-QfwG3Tg&s",
                testimonial: "SAHELI has completely transformed my wardrobe. Every piece feels like an investment in timeless elegance.",
                rating: 5
              },
              {
                name: "David Chen",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                testimonial: "The attention to detail and quality is unmatched. These are pieces I'll treasure for years to come.",
                rating: 5
              },
              {
                name: "Emma Rodriguez",
                role: "Sustainable Fashion Advocate",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                testimonial: "Finally, a brand that combines luxury with responsibility. SAHELI proves that ethical fashion can be beautiful.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-800">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current text-primary-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram/Social Feed Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cream-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              FOLLOW OUR JOURNEY
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Join our community and get inspired by real customers styling their SAHELI pieces
            </p>
            <div className="mt-8">
              <span className="text-primary-600 font-medium tracking-wider">@SAHELI_BY_AXS</span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop',
              'https://i.etsystatic.com/6286575/r/il/c1cef4/3980677748/il_570xN.3980677748_ip4y.jpg',
              'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=300&fit=crop'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square group cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-500 to-cream-500 text-white hover:from-primary-600 hover:to-cream-600 px-8 py-3 text-sm tracking-widest transition-all duration-300"
            >
              FOLLOW US ON INSTAGRAM
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-primary-500 to-cream-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4 tracking-[0.15em]">
              EXCLUSIVE LAUNCH OFFER
            </h2>
            <p className="text-xl mb-8 opacity-90 font-light">
              Get 20% off your first order + free shipping worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-700 hover:bg-neutral-100 px-8 py-4 text-sm tracking-widest transition-all duration-300"
              >
                <Link href="/products">SHOP NOW</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-sm tracking-widest transition-all duration-300"
              >
                USE CODE: WELCOME20
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cream-300/20 to-transparent rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-warm-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-900/20 to-cream-900/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-cream-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-[0.15em]">
              JOIN THE SAHELI FAMILY
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-400 to-cream-400 mx-auto mb-8"></div>
            <p className="text-xl text-cream-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Be the first to discover new collections, exclusive events, and timeless style insights. 
              Subscribe to our newsletter for a curated dose of elegance delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent font-light"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubscribing}
                  className="bg-gradient-to-r from-primary-500 to-cream-500 hover:from-primary-600 hover:to-cream-600 px-8 py-4 whitespace-nowrap tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              <p className="text-sm text-cream-300/80 font-light">
                By subscribing, you agree to receive marketing emails from SAHELI. You can unsubscribe at any time.
              </p>
            </form>
            
            {/* Social Media Links */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-cream-300 mb-6 font-light tracking-wider">FOLLOW US</p>
              <div className="flex justify-center space-x-6">
                {[
                  { name: 'Instagram', icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )},
                  { name: 'Facebook', icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )},
                  { name: 'Pinterest', icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.754-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  )}
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:text-primary-200 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
