import type { Metadata } from 'next';
import { ServiceCategoryTemplate } from '@/components/services/ServiceCategoryTemplate';

export const metadata: Metadata = {
  title: 'Heating Services in Ottawa — Furnace Repair, Installation & Heat Pumps',
  description:
    'Expert furnace repair, boiler service, and heat pump installation in Ottawa and Orléans. Same-day heating service, upfront pricing, licensed technicians since 2008. Call (613) 858-8525.',
  keywords: [
    'furnace repair Ottawa',
    'furnace installation Orléans',
    'heating contractor Ottawa',
    'heat pump Ottawa',
    'boiler repair Ottawa',
    'emergency furnace repair',
  ],
  openGraph: {
    title: 'Heating Services — Ottawa HVAC PROS',
    description:
      'Furnaces, boilers, and heat pumps. Trusted heating repairs and installs across Ottawa since 2008.',
    type: 'article',
  },
};

export default function HeatingServicesPage() {
  return (
    <ServiceCategoryTemplate
      eyebrow="Heating"
      title="Heating services in Ottawa"
      heroDescription="Reliable warmth for Ottawa winters — from emergency furnace repairs to high-efficiency replacements and heat pumps, with clear pricing before we start."
      intro="When the temperature drops, your heating system has to work. Ottawa HVAC PROS helps homeowners in Ottawa, Orléans, and surrounding areas stay comfortable with furnace and boiler service, heat pump installation, and fast response when something goes wrong. We explain what we find, quote the work in plain language, and stand behind our installations."
      sections={[
        {
          heading: 'Furnace repair & replacement',
          body: 'Whether your furnace is short-cycling, making unusual noises, or not keeping up on cold nights, we diagnose the real problem — not just the symptom. When a replacement makes sense, we help you compare efficiency ratings and rebates so you can choose equipment that fits your home and budget.',
        },
        {
          heading: 'Boilers & hydronic heating',
          body: 'Boiler systems need specialized care. Our licensed technicians service conventional and high-efficiency boilers, address circulation and venting issues, and help you avoid mid-winter surprises with seasonal maintenance.',
        },
        {
          heading: 'Heat pumps & dual-fuel options',
          body: 'Many Ottawa homes benefit from heat pumps for efficient heating and cooling. We assess your space, insulation, and existing ductwork, then recommend solutions that perform in our climate — including cold-climate heat pumps where appropriate.',
        },
      ]}
      bullets={[
        'Emergency furnace repair',
        'New furnace installation (natural gas, propane)',
        'Annual tune-ups & safety checks',
        'Heat pump installation & repair',
        'Boiler service & repair',
        'Thermostat upgrades & smart controls',
      ]}
      accentBar="navy"
    />
  );
}
