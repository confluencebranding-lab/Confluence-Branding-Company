import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = pageMetadata.portfolio;

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-light-bg to-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <span className="inline-block text-accent font-heading font-bold underline text-3xl tracking-widest uppercase mb-4">
              Our Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Work That Speaks for Itself
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-text text-lg leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of successful branding, marketing, and digital advertising 
              projects. Each project represents our commitment to creative excellence and measurable results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Portfolio showAll={true} showHeader={false} />
      <CTA />
    </>
  );
}
