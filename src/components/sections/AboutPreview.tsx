'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { about } from '@/lib/content';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white" aria-label="About CBC">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Content ── */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-accent font-heading font-bold underline text-2xl tracking-normal uppercase mb-8">
                {about.sectionTitle}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
                {about.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-text text-lg leading-relaxed mb-4">
                {about.description[0]}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-text leading-relaxed mb-8">
                {about.description[1]}
              </p>
            </ScrollReveal>

            {/* Why Choose Us bullets */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {about.whyChooseUs.slice(0, 6).map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={18}
                      className="text-success mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Button
                href="/about"
                variant="outline"
                icon={<ArrowRight size={16} />}
                id="about-preview-cta"
              >
                Learn More About Us
              </Button>
            </ScrollReveal>
          </div>

          {/* ── Right: Visual ── */}
          <ScrollReveal variant="slideLeft" delay={0.2}>
            <div className="relative">
              {/* Main visual card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/[0.04] to-accent/[0.06] p-10 lg:p-14">
                <div className="space-y-8">
                  {/* Mission */}
                  <div className="premium-card p-6">
                    <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed">
                      {about.mission}
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="premium-card p-6">
                    <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed">
                      {about.vision}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-primary/[0.06]" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-accent/[0.05]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
