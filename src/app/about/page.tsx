import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { about } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { CheckCircle2, Target, Eye } from 'lucide-react';
import Card from '@/components/ui/Card';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-light-bg to-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <span className="inline-block text-accent font-heading font-bold underline text-3xl tracking-widest uppercase mb-4">
              {about.sectionTitle}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              {about.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-text text-lg leading-relaxed max-w-3xl mx-auto">
              {about.description[0]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
                  Who We Are
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-gray-text text-lg leading-relaxed mb-6">
                  {about.whoWeAre}
                </p>
              </ScrollReveal>
              {about.description.slice(1).map((paragraph, index) => (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <p className="text-gray-text leading-relaxed mb-4">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <div>
              <ScrollReveal variant="slideLeft">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
                  What We Do
                </h2>
              </ScrollReveal>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {about.whatWeDo.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-light-bg transition-colors duration-300">
                      <CheckCircle2 size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal font-medium">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-light-bg">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card padding="lg" className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-6">
                  <Target size={26} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-text leading-relaxed text-lg">
                  {about.mission}
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card padding="lg" className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent/[0.06] flex items-center justify-center mb-6">
                  <Eye size={26} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-text leading-relaxed text-lg">
                  {about.vision}
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            label="Why Choose Us"
            title="Your Trusted Branding Partner"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.whyChooseUs.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 p-5 rounded-card bg-light-bg hover:bg-primary/[0.04] transition-colors duration-300">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal font-medium">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}
