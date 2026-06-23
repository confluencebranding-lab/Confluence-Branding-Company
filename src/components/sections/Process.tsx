'use client';

import * as LucideIcons from 'lucide-react';
import { processSteps } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';

/* Helper to dynamically get a Lucide icon by name */
function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
  return Icon || LucideIcons.Circle;
}

export default function Process() {
  return (
    <section className="section-padding bg-light-bg" aria-label="Our Process" id="process">
      <div className="section-container">
        <SectionHeader
          label="Our Process"
          title="How We Work"
          subtitle="A proven, step-by-step approach that transforms your business goals into measurable branding success."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* ── Connecting Line (desktop) ── */}
          <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-border" />

          {/* ── Steps ── */}
          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, index) => {
              const Icon = getIcon(step.icon);
              return (
                <ScrollReveal key={step.step} delay={index * 0.1}>
                  <div className="flex gap-6 md:gap-8 items-start group">
                    {/* Step Number Circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-white border-2 border-border flex flex-col items-center justify-center shadow-soft group-hover:border-primary/30 group-hover:shadow-card transition-all duration-500">
                        <Icon size={22} className="text-primary mb-1" />
                        <span className="text-xs font-heading font-bold text-primary/60">
                          {String(step.step).padStart(2, '0')}
                        </span>
                      </div>
                      {/* Dot on the line */}
                      <div className="hidden md:block absolute top-1/2 -left-[1px] w-2.5 h-2.5 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="font-heading font-semibold text-xl text-charcoal mb-2 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-text leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
