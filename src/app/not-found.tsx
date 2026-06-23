'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white py-20">
      <div className="section-container text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="relative inline-block mb-8">
            <h1 className="font-heading font-bold text-8xl md:text-9xl text-light-bg tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading font-bold text-3xl md:text-4xl text-charcoal">
                Oops!
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-charcoal mb-4">
            Page Not Found
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-text text-lg leading-relaxed mb-10">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Button href="/" icon={<Home size={18} />}>
            Back to Homepage
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
