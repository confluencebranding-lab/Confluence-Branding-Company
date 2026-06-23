'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { hero } from '@/lib/content';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* ── Animated Background Shapes ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient circle */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #1E3A5F 0%, transparent 70%)',
          }}
        />
        {/* Smaller accent circle */}
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #2F5FA5 0%, transparent 70%)',
          }}
        />
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 45, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[15%] w-16 h-16 rounded-2xl border-2 border-primary/[0.06] hidden lg:block"
        />
        <motion.div
          animate={{ y: [10, -20, 10], rotate: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-[25%] w-10 h-10 rounded-full border-2 border-accent/[0.08] hidden lg:block"
        />
        <motion.div
          animate={{ y: [-10, 15, -10], x: [-5, 10, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[40%] left-[8%] w-8 h-8 rounded-lg bg-primary/[0.03] hidden lg:block"
        />
        {/* Decorative dots */}
        <div className="absolute top-[20%] right-[10%] grid grid-cols-3 gap-3 opacity-[0.06] hidden lg:grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="section-container relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-300 text-primary text-sm font-medium mb-8"
          >
            <Sparkles size={14} />
            <span>Premium Branding & Marketing Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] text-primary mb-7"
          >
            {hero.headline.split('.').map((sentence, index) => (
              <span key={index}>
                {sentence.trim()}
                {index < hero.headline.split('.').length - 1 && (
                  <>
                    .
                    <br className="hidden sm:block" />{' '}
                  </>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-text text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href={hero.primaryCta.href}
              size="lg"
              icon={<ArrowRight size={18} />}
              id="hero-cta-primary"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              size="lg"
              id="hero-cta-secondary"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-14 flex items-center gap-6 justify-center text-sm text-gray-text/70"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Custom Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>On-time Delivery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
