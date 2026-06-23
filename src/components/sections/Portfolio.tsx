'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { portfolio } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface PortfolioSectionProps {
  showAll?: boolean;
  showHeader?: boolean;
}

export default function Portfolio({ 
  showAll = false,
  showHeader = true,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolio.items
      : portfolio.items.filter((item) => item.category === activeCategory);

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="section-padding bg-white" aria-label="Portfolio" id="portfolio">
      <div className="section-container">
      {showHeader && (
        <SectionHeader
          label={portfolio.sectionTitle}
          title={portfolio.headline}
          subtitle="A showcase of our creative branding, marketing campaigns, and digital advertising projects."
        />
      )}

        {/* ── Category Filters ── */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolio.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-light-bg text-gray-text hover:bg-primary/[0.08] hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* ── Portfolio Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="group cursor-pointer rounded-card overflow-hidden bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-500"
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
                  aria-label={`View project: ${item.title}`}
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ExternalLink size={28} className="mx-auto mb-2" />
                        <span className="text-sm font-medium">View</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-charcoal group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain bg-white"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-charcoal hover:bg-white transition-colors shadow-md"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
