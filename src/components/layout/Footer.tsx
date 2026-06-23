'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, Mail } from 'lucide-react';
import { footer, contactInfo } from '@/lib/content';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      {/* ── Main Footer ── */}
      <div className="section-container pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Column 1: Brand ── */}
          <ScrollReveal variant="slideUp" delay={0}>
            <div className="lg:col-span-1">
              <Image
                src={footer.logo.src}
                alt={footer.logo.alt}
                width={80}
                height={80}
                className="mb-5 rounded-full bg-white p-1 object-contain"
              />
              <h3 className="font-heading font-bold text-lg mb-2">
                {footer.companyName}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {footer.tagline}
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="Email us"
                >
                  <Mail size={18} />
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Column 2: Quick Links ── */}
          <ScrollReveal variant="slideUp" delay={0.1}>
            <div>
              <h4 className="font-heading font-semibold text-base mb-6 text-white/90">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footer.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── Column 3: Services ── */}
          <ScrollReveal variant="slideUp" delay={0.2}>
            <div>
              <h4 className="font-heading font-semibold text-base mb-6 text-white/90">
                Our Services
              </h4>
              <ul className="space-y-3">
                {footer.serviceLinks.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── Column 4: Contact + Legal ── */}
          <ScrollReveal variant="slideUp" delay={0.3}>
            <div>
              <h4 className="font-heading font-semibold text-base mb-6 text-white/90">
                Contact
              </h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white/60 hover:text-white text-sm transition-colors">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="text-white/60 hover:text-white text-sm transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <a
                    href={contactInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors break-all"
                  >
                    {contactInfo.instagram}
                  </a>
                </li>
              </ul>

              <h4 className="font-heading font-semibold text-base mb-4 text-white/90">
                Legal
              </h4>
              <ul className="space-y-3">
                {footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            {footer.copyright}
          </p>
          <p className="text-white/30 text-xs">
            {footer.bottomTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
