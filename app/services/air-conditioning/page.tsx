import type { Metadata } from 'next';
import { ServiceCategoryTemplate } from '@/components/services/ServiceCategoryTemplate';

export const metadata: Metadata = {
  title: 'Air Conditioning in Ottawa — AC Installation, Repair & Mini-Splits',
  description:
    'Central air conditioning installation, AC repair, and ductless mini-splits for Ottawa & Orléans. Seasonal tune-ups, honest quotes, licensed installers. Call (613) 858-8525.',
  keywords: [
    'AC installation Ottawa',
    'air conditioning repair Ottawa',
    'ductless mini split Ottawa',
    'central air Orléans',
    'AC tune up Ottawa',
  ],
  openGraph: {
    title: 'Air Conditioning Services — Ottawa HVAC PROS',
    description: 'Cool your home efficiently with central AC, ductless systems, and professional maintenance.',
    type: 'article',
  },
};

export default function AirConditioningPage() {
  return (
    <ServiceCategoryTemplate
      eyebrow="Cooling"
      title="Air conditioning in Ottawa"
      heroDescription="Beat the humidity and summer heat with central AC, ductless mini-splits, and maintenance that keeps efficiency high and breakdowns rare."
      intro="Ottawa summers are getting longer and hotter. We install and service air conditioning systems sized for your home — not oversized, not underpowered — and we help you understand efficiency ratings, sound levels, and how your AC works with your furnace or air handler. From quick repairs to full replacements, you get the same upfront approach we use on every job."
      sections={[
        {
          heading: 'Central air conditioning',
          body: 'We install matched indoor and outdoor equipment, verify refrigerant charge and airflow, and walk you through thermostat settings so your home cools evenly. If your existing AC is aging or inefficient, we’ll tell you honestly whether repair or replacement is the better value.',
        },
        {
          heading: 'Ductless & multi-zone cooling',
          body: 'Homes without ductwork — or rooms that never stay comfortable — are great candidates for ductless mini-splits. We design layouts that minimize line runs and maximize performance, ideal for additions, basements, and older Ottawa homes.',
        },
        {
          heading: 'Tune-ups & refrigerant service',
          body: 'Annual maintenance helps catch worn parts before they fail on the hottest day. We clean coils, check electrical components, test pressures, and keep your warranty protections in mind when we service your equipment.',
        },
      ]}
      bullets={[
        'Central AC installation & replacement',
        'AC repair & refrigerant service',
        'Ductless mini-split systems',
        'Seasonal AC tune-ups',
        'Smart thermostat integration',
        'Load calculation & sizing guidance',
      ]}
      accentBar="red"
    />
  );
}
