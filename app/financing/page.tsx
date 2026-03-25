import type { Metadata } from 'next';
import { FinancingPageContent } from '@/components/financing/FinancingPageContent';

export const metadata: Metadata = {
  title: 'Financing — Ottawa HVAC PROS',
  description:
    'Flexible HVAC financing options for Ottawa homeowners. Buy now, pay over time for furnace or AC installation. Low monthly payments, instant approval.',
};

export default function FinancingPage() {
  return <FinancingPageContent />;
}
