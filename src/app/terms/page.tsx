import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = pageMetadata.terms;

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-light-bg to-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
              Terms & Conditions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-text text-lg max-w-2xl mx-auto">
              Last updated: June 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white pt-0">
        <div className="section-container max-w-4xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:text-gray-text prose-a:text-primary hover:prose-a:text-accent">
          <ScrollReveal delay={0.2}>
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Confluence Branding Company (&quot;CBC&quot;, “we,” “us” or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>

            <h2>3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
            </p>

            <h2>4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>

            <h2>5. User Generated Contributions</h2>
            <p>
              The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. Confluence Branding Company and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <p>
              Email: confluencebranding@gmail.com<br />
              Phone: +91 9789876125
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
