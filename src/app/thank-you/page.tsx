import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Button from '@/components/ui/Button';
import { Home, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = pageMetadata.thankYou;

export default function ThankYouPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-light-bg relative overflow-hidden">
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-soft">
            <svg
              className="w-12 h-12 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-4">
            Thank You!
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-text text-lg leading-relaxed mb-10">
            We&apos;ve received your message. Our team will review your inquiry and get back to you within 24 hours to discuss how we can help build your brand.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="outline" icon={<Home size={18} />}>
            Back to Home
          </Button>
          <Button href="/portfolio" icon={<ArrowRight size={18} />}>
            View Our Work
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
