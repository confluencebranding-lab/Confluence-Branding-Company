import type { Metadata } from 'next';

const siteUrl = 'https://confluencebranding.in';
const siteName = 'Confluence Branding Company (CBC)';

/* ========================================
   Shared metadata defaults
   ======================================== */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

    verification: {
    google: '_g36gQtNm56cDDVmQKqZnbb_1ew5O3OfDJZe3F5fWYw',
  },
  title: {
    default: `${siteName} — Premium Branding & Marketing Agency`,
    template: `%s | ${siteName}`,
  },
  description:
    'Confluence Branding Company (CBC) helps businesses build a powerful brand presence through strategic branding, brand promotion, social media management, and digital advertising.',
  keywords: [
    'branding agency',
    'brand promotion',
    'social media management',
    'digital advertising',
    'marketing strategy',
    'SEO',
    'content marketing',
    'email marketing',
    'Confluence Branding Company',
    'CBC',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    title: `${siteName} — Premium Branding & Marketing Agency`,
    description:
      'Build a strong brand, reach more customers, and grow your business with CBC.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Premium Branding & Marketing Agency`,
    description:
      'Build a strong brand, reach more customers, and grow your business with CBC.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ========================================
   Page-specific metadata
   ======================================== */
export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: 'Confluence Branding & Marketing Agency',
    description:
      'Confluence Branding Company helps businesses build a powerful brand presence through strategic branding, promotion, and digital marketing.',
  },
  about: {
    title: 'About Us',
    description:
      'Learn about Confluence Branding Company — our mission, vision, team, and commitment to building brands that make an impact.',
  },
  services: {
    title: 'Our Services',
    description:
      'Explore CBC\'s comprehensive branding and marketing services including social media management, SEO, digital advertising, and more.',
  },
  portfolio: {
    title: 'Our Portfolio',
    description:
      'See our latest branding, marketing, and digital advertising projects. Quality work that speaks for itself.',
  },
  faqs: {
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about CBC\'s branding and marketing services, pricing, and process.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with Confluence Branding Company for a free consultation. Let\'s build your brand together.',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    description:
      'Read the privacy policy of Confluence Branding Company to understand how we handle your data.',
  },
  terms: {
    title: 'Terms & Conditions',
    description:
      'Review the terms and conditions for using Confluence Branding Company\'s services and website.',
  },
  thankYou: {
    title: 'Thank You',
    description: 'Your message has been received. We will get back to you shortly.',
    robots: { index: false, follow: false },
  },
};
