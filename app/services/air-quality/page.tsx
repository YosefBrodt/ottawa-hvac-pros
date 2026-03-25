import type { Metadata } from 'next';
import { ServiceCategoryTemplate } from '@/components/services/ServiceCategoryTemplate';

export const metadata: Metadata = {
  title: 'Indoor Air Quality in Ottawa — Duct Cleaning, Filtration & Humidity',
  description:
    'Duct cleaning, HEPA filtration, humidifiers, HRV/ERV, and UV options for healthier indoor air in Ottawa & Orléans. Licensed HVAC pros. Call (613) 858-8525.',
  keywords: [
    'duct cleaning Ottawa',
    'air purifier installation Ottawa',
    'whole home humidifier Ottawa',
    'HRV ERV Ottawa',
    'indoor air quality Ottawa',
  ],
  openGraph: {
    title: 'Air Quality Services — Ottawa HVAC PROS',
    description: 'Cleaner air and balanced humidity — filtration, ducts, ventilation, and expert recommendations.',
    type: 'article',
  },
};

export default function AirQualityPage() {
  return (
    <ServiceCategoryTemplate
      eyebrow="Air quality"
      title="Indoor air quality in Ottawa"
      heroDescription="Healthier air isn’t one-size-fits-all. We combine filtration, humidity control, ventilation, and duct cleaning so your home feels better year-round."
      intro="Dust, pollen, dry winter air, and stale circulation are common in Ottawa homes. We assess your existing HVAC system and lifestyle needs, then recommend practical upgrades — from high-efficiency filters and whole-home humidifiers to HRV/ERV ventilation and professional duct cleaning. Our goal is measurable comfort: fewer allergens, balanced humidity, and equipment that works together instead of against itself."
      sections={[
        {
          heading: 'Filtration & purification',
          body: 'We match filter types and air cleaners to your furnace or air handler so you get better capture of particles without straining the system. When UV or additional purification makes sense for your household, we explain the trade-offs clearly.',
        },
        {
          heading: 'Humidity & ventilation',
          body: 'Ottawa winters are dry; summers can feel muggy indoors. Humidifiers, dehumidification strategies, and heat-recovery ventilators help maintain healthy levels and reduce condensation issues that lead to mold and window damage.',
        },
        {
          heading: 'Duct cleaning & sealing',
          body: 'We use professional duct cleaning methods appropriate for your home and explain when cleaning is likely to help versus when other fixes (like sealing or filtration) should come first.',
        },
      ]}
      bullets={[
        'HEPA & high-efficiency filtration',
        'Whole-home humidifier installation',
        'UV & air purification options',
        'Professional duct cleaning',
        'HRV / ERV installation & service',
        'Carbon monoxide safety & airflow checks',
      ]}
      accentBar="blue"
    />
  );
}
