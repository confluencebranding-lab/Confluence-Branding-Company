'use client';

import * as LucideIcons from 'lucide-react';
import { services } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* Helper to dynamically get a Lucide icon by name */
function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
  return Icon || LucideIcons.Briefcase;
}

interface ServicesSectionProps {
  showAll?: boolean;
  showHeader?: boolean;
}

export default function Services({ 
  showAll = false,
  showHeader = true,
 }: ServicesSectionProps) {
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="section-padding bg-light-bg" aria-label="Our Services" id="services">
      <div className="section-container">
      {showHeader && (
        <SectionHeader
          label="Our Services"
          title="Comprehensive Branding & Marketing Solutions"
          subtitle="From brand identity to digital advertising, we offer end-to-end solutions to help your business grow."
        />
      )}

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <StaggerItem key={service.id}>
                <Card className="h-full group" padding="lg">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-6 group-hover:bg-primary/[0.1] transition-colors duration-300">
                    <Icon size={26} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-text text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  
                  {/* Learn More */}
                  {/*
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                  */}
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
