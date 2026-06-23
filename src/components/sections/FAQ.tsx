'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import { faqs } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface FAQSectionProps {
  showSearch?: boolean;
  showHeader?: boolean;
}

export default function FAQ({ 
  showSearch = true,
  showHeader = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <section className="section-padding bg-white" aria-label="FAQs" id="faqs">
      <div className="section-container">
        {showHeader && (
          <SectionHeader
            label="FAQs"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our branding and marketing services."
          />
        )}

        {/* ── Search ── */}
        {showSearch && (
          <ScrollReveal className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-text/50"
              />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-btn bg-light-bg border border-border text-charcoal placeholder:text-gray-text/40 focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all duration-300 text-sm"
                aria-label="Search FAQs"
              />
            </div>
          </ScrollReveal>
        )}

        {/* ── Accordion ── */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.05}>
              <div className="border border-border rounded-card overflow-hidden hover:border-primary/20 transition-colors duration-300">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-heading font-semibold text-base text-charcoal group-hover:text-primary transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-light-bg flex items-center justify-center group-hover:bg-primary/[0.08] transition-colors duration-300">
                    {openIndex === index ? (
                      <Minus size={16} className="text-primary" />
                    ) : (
                      <Plus size={16} className="text-gray-text" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-text leading-relaxed text-sm border-t border-border/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-gray-text">
              <p>No questions match your search. Try different keywords or Contact us Directly</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
