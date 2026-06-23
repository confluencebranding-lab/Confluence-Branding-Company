import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = pageMetadata.faqs;

export default function FAQsPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-light-bg to-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <span className="inline-block text-accent font-heading font-bold underline text-3xl tracking-widest uppercase mb-4">
              FAQ
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-text text-lg leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our branding and marketing services. 
              Can&apos;t find what you&apos;re looking for?
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FAQ showSearch={true} showHeader={false} />
      <CTA />
    </>
  );
}
