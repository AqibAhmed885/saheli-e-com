'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

type Category = 'women' | 'men';
type Unit = 'cm' | 'inches';

export default function SizeGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('women');
  const [selectedUnit, setSelectedUnit] = useState<Unit>('cm');

  const sizeData: Record<Category, Record<Unit, {
    tops: Array<{
      size: string;
      bust?: string;
      chest?: string;
      waist: string;
      hips?: string;
      neck?: string;
    }>;
    bottoms: Array<{
      size: string;
      waist: string;
      hips: string;
      inseam: string;
    }>;
  }>> = {
    women: {
      cm: {
        tops: [
          { size: 'XS', bust: '80-84', waist: '60-64', hips: '86-90' },
          { size: 'S', bust: '84-88', waist: '64-68', hips: '90-94' },
          { size: 'M', bust: '88-94', waist: '68-74', hips: '94-100' },
          { size: 'L', bust: '94-100', waist: '74-80', hips: '100-106' },
          { size: 'XL', bust: '100-108', waist: '80-88', hips: '106-114' },
          { size: 'XXL', bust: '108-116', waist: '88-96', hips: '114-122' }
        ],
        bottoms: [
          { size: 'XS', waist: '60-64', hips: '86-90', inseam: '76' },
          { size: 'S', waist: '64-68', hips: '90-94', inseam: '76' },
          { size: 'M', waist: '68-74', hips: '94-100', inseam: '78' },
          { size: 'L', waist: '74-80', hips: '100-106', inseam: '78' },
          { size: 'XL', waist: '80-88', hips: '106-114', inseam: '80' },
          { size: 'XXL', waist: '88-96', hips: '114-122', inseam: '80' }
        ]
      },
      inches: {
        tops: [
          { size: 'XS', bust: '31.5-33', waist: '23.5-25', hips: '34-35.5' },
          { size: 'S', bust: '33-34.5', waist: '25-26.5', hips: '35.5-37' },
          { size: 'M', bust: '34.5-37', waist: '26.5-29', hips: '37-39.5' },
          { size: 'L', bust: '37-39.5', waist: '29-31.5', hips: '39.5-41.5' },
          { size: 'XL', bust: '39.5-42.5', waist: '31.5-34.5', hips: '41.5-45' },
          { size: 'XXL', bust: '42.5-45.5', waist: '34.5-38', hips: '45-48' }
        ],
        bottoms: [
          { size: 'XS', waist: '23.5-25', hips: '34-35.5', inseam: '30' },
          { size: 'S', waist: '25-26.5', hips: '35.5-37', inseam: '30' },
          { size: 'M', waist: '26.5-29', hips: '37-39.5', inseam: '30.5' },
          { size: 'L', waist: '29-31.5', hips: '39.5-41.5', inseam: '30.5' },
          { size: 'XL', waist: '31.5-34.5', hips: '41.5-45', inseam: '31.5' },
          { size: 'XXL', waist: '34.5-38', hips: '45-48', inseam: '31.5' }
        ]
      }
    },
    men: {
      cm: {
        tops: [
          { size: 'XS', chest: '86-91', waist: '71-76', neck: '35-36' },
          { size: 'S', chest: '91-97', waist: '76-81', neck: '36-37' },
          { size: 'M', chest: '97-102', waist: '81-86', neck: '37-38' },
          { size: 'L', chest: '102-107', waist: '86-91', neck: '38-39' },
          { size: 'XL', chest: '107-112', waist: '91-97', neck: '39-40' },
          { size: 'XXL', chest: '112-117', waist: '97-102', neck: '40-41' }
        ],
        bottoms: [
          { size: 'XS', waist: '71-76', hips: '86-91', inseam: '81' },
          { size: 'S', waist: '76-81', hips: '91-97', inseam: '81' },
          { size: 'M', waist: '81-86', hips: '97-102', inseam: '83' },
          { size: 'L', waist: '86-91', hips: '102-107', inseam: '83' },
          { size: 'XL', waist: '91-97', hips: '107-112', inseam: '85' },
          { size: 'XXL', waist: '97-102', hips: '112-117', inseam: '85' }
        ]
      },
      inches: {
        tops: [
          { size: 'XS', chest: '34-36', waist: '28-30', neck: '14-14.5' },
          { size: 'S', chest: '36-38', waist: '30-32', neck: '14.5-15' },
          { size: 'M', chest: '38-40', waist: '32-34', neck: '15-15.5' },
          { size: 'L', chest: '40-42', waist: '34-36', neck: '15.5-16' },
          { size: 'XL', chest: '42-44', waist: '36-38', neck: '16-16.5' },
          { size: 'XXL', chest: '44-46', waist: '38-40', neck: '16.5-17' }
        ],
        bottoms: [
          { size: 'XS', waist: '28-30', hips: '34-36', inseam: '32' },
          { size: 'S', waist: '30-32', hips: '36-38', inseam: '32' },
          { size: 'M', waist: '32-34', hips: '38-40', inseam: '32.5' },
          { size: 'L', waist: '34-36', hips: '40-42', inseam: '32.5' },
          { size: 'XL', waist: '36-38', hips: '42-44', inseam: '33.5' },
          { size: 'XXL', waist: '38-40', hips: '44-46', inseam: '33.5' }
        ]
      }
    }
  };

  const measurementTips = [
    {
      title: "Bust/Chest",
      description: "Measure around the fullest part of your bust/chest, keeping the measuring tape parallel to the floor.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Waist",
      description: "Measure around your natural waistline, which is the narrowest part of your torso.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Hips",
      description: "Measure around the fullest part of your hips, approximately 8 inches below your waist.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Inseam",
      description: "Measure from the crotch seam to the bottom of the leg along the inside seam.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

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
              SIZE GUIDE
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Find your perfect fit with our comprehensive sizing guide. Crafted for comfort and elegance in every size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category and Unit Selection */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-xl mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {/* Category Selection */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-neutral-700 mr-3">Category:</span>
                <div className="flex bg-warm-100 rounded-lg p-1">
                  <button
                    onClick={() => setSelectedCategory('women')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      selectedCategory === 'women'
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    Women
                  </button>
                  <button
                    onClick={() => setSelectedCategory('men')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      selectedCategory === 'men'
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    Men
                  </button>
                </div>
              </div>

              {/* Unit Selection */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-neutral-700 mr-3">Units:</span>
                <div className="flex bg-warm-100 rounded-lg p-1">
                  <button
                    onClick={() => setSelectedUnit('cm')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      selectedUnit === 'cm'
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    CM
                  </button>
                  <button
                    onClick={() => setSelectedUnit('inches')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      selectedUnit === 'inches'
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    Inches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Charts */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tops Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-light text-neutral-800 mb-6 tracking-wide text-center">
                Tops & Dresses
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-warm-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-neutral-700">Size</th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-neutral-700">
                        {selectedCategory === 'women' ? 'Bust' : 'Chest'} ({selectedUnit})
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-neutral-700">
                        Waist ({selectedUnit})
                      </th>
                      {selectedCategory === 'women' && (
                        <th className="text-center py-3 px-2 text-sm font-medium text-neutral-700">
                          Hips ({selectedUnit})
                        </th>
                      )}
                      {selectedCategory === 'men' && (
                        <th className="text-center py-3 px-2 text-sm font-medium text-neutral-700">
                          Neck ({selectedUnit})
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData[selectedCategory][selectedUnit].tops.map((size, index) => (
                      <tr key={size.size} className={index % 2 === 0 ? 'bg-warm-25' : ''}>
                        <td className="py-3 px-2 font-medium text-neutral-800">{size.size}</td>
                        <td className="py-3 px-2 text-center text-neutral-600">
                          {selectedCategory === 'women' ? size.bust : size.chest}
                        </td>
                        <td className="py-3 px-2 text-center text-neutral-600">{size.waist}</td>
                        {selectedCategory === 'women' && (
                          <td className="py-3 px-2 text-center text-neutral-600">{size.hips}</td>
                        )}
                        {selectedCategory === 'men' && (
                          <td className="py-3 px-2 text-center text-neutral-600">{size.neck}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Bottoms Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-light text-neutral-800 mb-6 tracking-wide text-center">
                Bottoms
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-warm-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-neutral-700">Size</th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-neutral-700">
                        Waist ({selectedUnit})
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-neutral-700">
                        Hips ({selectedUnit})
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-medium text-neutral-700">
                        Inseam ({selectedUnit})
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData[selectedCategory][selectedUnit].bottoms.map((size, index) => (
                      <tr key={size.size} className={index % 2 === 0 ? 'bg-warm-25' : ''}>
                        <td className="py-3 px-2 font-medium text-neutral-800">{size.size}</td>
                        <td className="py-3 px-2 text-center text-neutral-600">{size.waist}</td>
                        <td className="py-3 px-2 text-center text-neutral-600">{size.hips}</td>
                        <td className="py-3 px-2 text-center text-neutral-600">{size.inseam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Measure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              HOW TO MEASURE
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              For the most accurate fit, follow these measuring guidelines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {measurementTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-cream-200 transition-all duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {tip.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Measurement Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cream-50 to-warm-50 rounded-2xl p-8 text-center"
          >
            <div className="max-w-md mx-auto">
              <div className="relative aspect-[3/4] mb-6 bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"
                  alt="Measurement guide illustration"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-medium text-neutral-800 mb-4">
                Measuring Tips
              </h3>
              <ul className="text-left space-y-2 text-neutral-600 text-sm">
                <li>• Use a soft measuring tape</li>
                <li>• Keep the tape parallel to the floor</li>
                <li>• Don&rsquo;t pull the tape too tight</li>
                <li>• Wear well-fitting undergarments</li>
                <li>• Ask someone to help for accuracy</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fit Guide */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
              FIT PHILOSOPHY
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Relaxed Fit",
                description: "Comfortable, loose-fitting silhouettes that drape beautifully and allow for easy movement.",
                image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop"
              },
              {
                title: "Regular Fit",
                description: "Classic tailoring that follows the body&rsquo;s natural shape without being too tight or loose.",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop"
              },
              {
                title: "Slim Fit",
                description: "Tailored closer to the body for a sleek, modern silhouette that maintains comfort.",
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop"
              }
            ].map((fit, index) => (
              <motion.div
                key={fit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={fit.image}
                    alt={fit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-medium mb-2">{fit.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {fit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cream-50 to-warm-50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-light text-neutral-800 mb-6 tracking-wide">
              Need Help with Sizing?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our style consultants are here to help you find the perfect fit. Get personalized sizing advice and styling tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-cream-500 hover:from-primary-600 hover:to-cream-600 text-white px-8 py-3 text-sm tracking-widest transition-all duration-300"
              >
                Contact Style Consultant
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white px-8 py-3 text-sm tracking-widest transition-all duration-300"
              >
                Live Chat Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
