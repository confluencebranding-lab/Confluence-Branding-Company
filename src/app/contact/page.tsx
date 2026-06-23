import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { contactInfo } from '@/lib/content';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ContactForm from '@/components/sections/ContactForm';
import { Phone, Mail, Instagram, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-light-bg to-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <span className="inline-block text-accent font-heading font-bold underline text-3xl tracking-widest uppercase mb-4">
              Contact Us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              {contactInfo.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-text text-lg leading-relaxed max-w-3xl mx-auto">
              {contactInfo.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="section-padding bg-white" aria-label="Contact Information">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Left: Contact Info ── */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading font-bold text-2xl text-charcoal mb-8">
                  Get in Touch
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-card bg-light-bg hover:bg-primary/[0.04] transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-charcoal mb-1">Phone</h3>
                      <a href={`tel:${contactInfo.phone}`} className="text-gray-text hover:text-primary transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <div className="flex items-start gap-4 p-5 rounded-card bg-light-bg hover:bg-primary/[0.04] transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-charcoal mb-1">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-gray-text hover:text-primary transition-colors break-all">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex items-start gap-4 p-5 rounded-card bg-light-bg hover:bg-primary/[0.04] transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                      <Instagram size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-charcoal mb-1">Instagram</h3>
                      <a
                        href={contactInfo.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-text hover:text-primary transition-colors break-all"
                      >
                        {contactInfo.instagram}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="flex items-start gap-4 p-5 rounded-card bg-light-bg hover:bg-primary/[0.04] transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-charcoal mb-1">Working Days</h3>
                      <p className="text-gray-text">{contactInfo.workingDays}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <ScrollReveal variant="slideLeft">
                <div className="bg-white rounded-2xl border border-border shadow-card p-8 md:p-10">
                  <h2 className="font-heading font-bold text-2xl text-charcoal mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-text text-sm mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      {/*
      <section className="bg-light-bg py-16" aria-label="Location Map">
        <div className="section-container">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft h-64 md:h-96 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-primary/30 mx-auto mb-3" />
                <p className="text-gray-text text-sm">
                  Google Maps will be embedded here
                </p>
                <p className="text-gray-text/50 text-xs mt-1">
                  Replace this placeholder with your Google Maps embed code
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      */}
    </>
  );
}
