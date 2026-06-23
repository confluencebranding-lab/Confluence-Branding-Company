'use client';

import { statistics } from '@/lib/content';
import Counter from '@/components/animations/Counter';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Statistics() {
  return (
    <section className="relative bg-primary py-16 md:py-20 overflow-hidden" aria-label="Statistics">
      {/* ── Subtle pattern overlay ── */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <ScrollReveal key={stat.label} variant="slideUp" delay={index * 0.1}>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <p className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
