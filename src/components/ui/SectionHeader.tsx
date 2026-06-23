'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 md:mb-20 ${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <ScrollReveal delay={0}>
          <span className="inline-block text-accent font-heading font-bold underline text-2xl tracking-normal uppercase mb-8">
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-5">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className={`text-gray-text text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
