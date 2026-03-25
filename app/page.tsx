import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ReviewsStrip from '@/components/home/ReviewsStrip';

export const metadata: Metadata = {
  title: 'Ottawa HVAC PROS — Heating & Cooling in Orléans, ON',
  description:
    'Licensed HVAC contractor serving Ottawa and Orléans since 2008. Furnace repair, AC installation, air quality services. Same-day service. Call (613) 858-8525.',
  keywords: ['HVAC Ottawa', 'furnace repair Ottawa', 'AC installation Orléans', 'heating cooling Ottawa'],
  openGraph: {
    title: 'Ottawa HVAC PROS — Heating, Cooling & Air Quality',
    description: 'Trusted HVAC experts in Orléans, ON since 2008. Same-day service, upfront pricing.',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsStrip />
    </>
  );
}
