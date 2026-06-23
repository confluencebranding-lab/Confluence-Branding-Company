'use client';

import { ArrowRight } from 'lucide-react';
import { ctaSection } from '@/lib/content';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" aria-label="Call to Action">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />

      {/* ── Pattern Overlay ── */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      {/* ── Decorative Shapes ── */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white/5" />

      <div className="section-container relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            {ctaSection.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {ctaSection.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Button
            href={ctaSection.buttonHref}
            variant="secondary"
            size="lg"
            icon={<ArrowRight size={18} />}
            className="bg-white text-primary hover:bg-white/90 border-none shadow-lg hover:shadow-xl"
            id="cta-consultation-btn"
          >
            {ctaSection.buttonLabel}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
