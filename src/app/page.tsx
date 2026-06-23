import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Hero from '@/components/sections/Hero';
import Statistics from '@/components/sections/Statistics';
import AboutPreview from '@/components/sections/AboutPreview';
import Services from '@/components/sections/Services';
import WhyChoose from '@/components/sections/WhyChoose';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = pageMetadata.home;

export default function HomePage() {
  return (
    <>
      <Hero />
      {/*<Statistics />*/}
      <AboutPreview />
      <Services />
      <WhyChoose />
      <Process />
      <Portfolio />
      {/*<Testimonials />*/}
      <FAQ showSearch={false} />
      <CTA />
    </>
  );
}
