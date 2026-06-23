'use client';

import * as LucideIcons from 'lucide-react';
import { whyChoose } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';

/* Helper to dynamically get a Lucide icon by name */
function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
  return Icon || LucideIcons.Star;
}

export default function WhyChoose() {
  return (
    <section className="section-padding bg-white" aria-label="Why Choose CBC" id="why-choose">
      <div className="section-container">
        <SectionHeader
          label="Why Choose CBC"
          title="Your Trusted Branding Partner"
          subtitle="We combine creativity, strategy, and dedication to deliver branding solutions that drive real business results."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChoose.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <StaggerItem key={item.title}>
                <Card className="text-center group h-full" padding="lg">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.05] flex items-center justify-center mx-auto mb-6 group-hover:from-primary/[0.14] group-hover:to-accent/[0.1] transition-all duration-300">
                    <Icon size={28} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-text text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
