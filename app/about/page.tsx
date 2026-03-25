import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/about/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us — Ottawa HVAC PROS',
  description:
    'Ottawa HVAC PROS has served Ottawa and Orléans homeowners since 2008. Licensed, insured, and committed to honest pricing, expert service, and long-term trust.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
