import type { Metadata } from 'next';
import { ServicesPageContent } from '@/components/services/ServicesPageContent';

export const metadata: Metadata = {
  title: 'HVAC Services — Heating, Cooling & Air Quality in Ottawa',
  description:
    'Full-service HVAC solutions in Ottawa and Orléans: furnace installation & repair, central AC, ductless mini-splits, air quality systems, and duct cleaning. Licensed since 2008.',
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
