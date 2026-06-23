import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-light-bg to-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <span className="inline-block text-accent font-heading font-bold underline text-3xl tracking-widest uppercase mb-4">
              Our Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Comprehensive Branding &<br className="hidden sm:block" /> Marketing Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-text text-lg leading-relaxed max-w-3xl mx-auto">
              From building your brand identity to running high-performance digital campaigns, 
              we provide end-to-end marketing solutions tailored to your business goals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Services showAll={true} showHeader={false} />
      <Process />
      <CTA />
    </>
  );
}
