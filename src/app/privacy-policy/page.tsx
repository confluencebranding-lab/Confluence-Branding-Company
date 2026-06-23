import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = pageMetadata.privacyPolicy;

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-light-bg to-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
              Privacy Policy
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
            <h2>1. Introduction</h2>
            <p>
              Welcome to Confluence Branding Company (CBC). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>

            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2>5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>

            <h2>6. Contact Details</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
            </p>
            <p>
              Email address: confluencebranding@gmail.com<br />
              Telephone number: +91 9789876125
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
