'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/content';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close menu on route change ── */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* ── Prevent scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass-strong shadow-nav py-3'
        : 'bg-transparent py-5'
        }`}
      role="banner"
    >
      <nav
        className="section-container flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-2"
          aria-label="Confluence Branding Company — Home"
        >
          <Image
            src={navigation.logo.src}
            alt={navigation.logo.alt}
            width={240}
            height={80}
            className="h-20 md:h-24 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* ── Desktop Navigation ── */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:text-primary ${pathname === link.href
                ? 'text-primary'
                : 'text-gray-text'
                }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:block">
          <Button href={navigation.cta.href} size="sm">
            {navigation.cta.label}
          </Button>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <button
          className="lg:hidden relative z-50 p-2 text-charcoal hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-40 lg:hidden"
              >
                <div className="flex flex-col h-full pt-24 pb-8 px-8">
                  <div className="flex flex-col gap-2">
                    {navigation.links.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${pathname === link.href
                            ? 'text-primary bg-primary/5'
                            : 'text-charcoal hover:text-primary hover:bg-light-bg'
                            }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button href={navigation.cta.href} className="w-full">
                      {navigation.cta.label}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
