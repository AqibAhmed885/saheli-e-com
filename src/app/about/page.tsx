'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 to-warm-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=1080&fit=crop"
            alt="SAHELI Story"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 via-primary-800/40 to-cream-900/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin mb-6 tracking-[0.3em] leading-tight">
              OUR STORY
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Discover the passion, craftsmanship, and vision behind SAHELI—where timeless elegance meets sustainable luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-[0.15em]">
                THE BEGINNING
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mb-8"></div>
              <p className="text-xl text-neutral-600 mb-6 font-light leading-relaxed">
                SAHELI was born from a simple yet profound belief: that fashion should be both beautiful and responsible. Founded by visionary designer Anaya Sharma (AxS), our brand represents a new era of conscious luxury.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                The name &ldquo;SAHELI&rdquo; means &ldquo;friend&rdquo; in Hindi—reflecting our commitment to being a trusted companion in your style journey. We believe that true elegance comes from understanding, respect, and mindful choices.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Every piece in our collection is carefully curated to transcend seasonal trends, creating a timeless wardrobe that honors both your personal style and our planet&rsquo;s future.
              </p>
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
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=750&fit=crop"
                  alt="Founder Anaya Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-100 to-cream-100 rounded-2xl p-8 shadow-xl">
                <p className="text-neutral-800 font-light italic text-lg">
                  &ldquo;Fashion is not just about what you wear, it&rsquo;s about who you become.&rdquo;
                </p>
                <p className="text-sm text-neutral-600 mt-2 font-medium">— Anaya Sharma, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              OUR VALUES
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              The principles that guide every decision we make, every design we create, and every relationship we build.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sustainability",
                description: "Every material is carefully sourced with environmental impact in mind. We partner with suppliers who share our commitment to protecting our planet.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "Craftsmanship",
                description: "We celebrate the artisans who bring our designs to life. Each piece is created with passion, skill, and attention to detail.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Timeless Design",
                description: "We create pieces that transcend trends, focusing on classic silhouettes and refined details that remain elegant season after season.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Ethical Practices",
                description: "Fair wages, safe working conditions, and respectful partnerships are non-negotiable aspects of our business model.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-cream-200 transition-all duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-light text-neutral-800 mb-4 tracking-wide text-center">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              MEET THE TEAM
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-cream-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              The passionate individuals who bring SAHELI&rsquo;s vision to life every day.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Anaya Sharma",
                role: "Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332c218?w=400&h=400&fit=crop&crop=face",
                bio: "With over 15 years in fashion, Anaya founded SAHELI to prove that luxury and sustainability can coexist beautifully."
              },
              {
                name: "Ravi Patel",
                role: "Head of Sustainability",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                bio: "Ravi ensures every aspect of our supply chain meets the highest standards of environmental and social responsibility."
              },
              {
                name: "Priya Nair",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
                bio: "Priya&rsquo;s innovative designs bridge traditional craftsmanship with contemporary aesthetics, creating truly timeless pieces."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light text-neutral-800 mb-2 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4 tracking-wider text-sm">
                  {member.role}
                </p>
                <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-cream-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-6 tracking-[0.15em]">
              JOIN OUR JOURNEY
            </h2>
            <p className="text-xl mb-8 opacity-90 font-light max-w-2xl mx-auto">
              Discover pieces that tell your story while honoring our shared commitment to a more sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-700 hover:bg-neutral-100 px-8 py-4 text-sm tracking-widest transition-all duration-300"
              >
                <Link href="/products">EXPLORE COLLECTION</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-sm tracking-widest transition-all duration-300"
              >
                <Link href="/contact">GET IN TOUCH</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
