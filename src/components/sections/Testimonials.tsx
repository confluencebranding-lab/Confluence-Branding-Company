'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  /* ── Auto-play ── */
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="section-padding bg-light-bg" aria-label="Testimonials" id="testimonials">
      <div className="section-container">
        <SectionHeader
          label=""
          title=""
          subtitle="Don't just take our word for it — hear from the businesses we've helped grow."
        />

        <ScrollReveal>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* ── Testimonial Card ── */}
            <div className="bg-white rounded-2xl border border-border shadow-card p-8 md:p-12 min-h-[280px] flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-6 left-8 opacity-[0.06]">
                <Quote size={64} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-heading font-bold text-xl">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-charcoal text-lg md:text-xl leading-relaxed mb-6 font-medium italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-heading font-semibold text-charcoal">
                      {testimonials[current].name}
                    </p>
                    <p className="text-gray-text text-sm">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Navigation ── */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-white border border-border shadow-soft flex items-center justify-center text-charcoal hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-border hover:bg-primary/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-white border border-border shadow-soft flex items-center justify-center text-charcoal hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
