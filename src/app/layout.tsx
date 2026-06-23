import type { Metadata } from 'next';
import { defaultMetadata } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Confluence Branding Company (CBC)',
              description:
                'Premium branding and marketing agency helping businesses build powerful brand presence.',
              url: 'https://confluencebranding.com',
              telephone: '+919789876125',
              email: 'confluencebranding@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://instagram.com/confluencebrandingcompany_cbc',
              ],
              serviceType: [
                'Branding',
                'Social Media Management',
                'Digital Advertising',
                'SEO',
                'Marketing Strategy',
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
