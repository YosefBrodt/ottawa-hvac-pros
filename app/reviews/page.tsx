import type { Metadata } from 'next';
import { ReviewsPageContent } from '@/components/reviews/ReviewsPageContent';

export const metadata: Metadata = {
  title: 'Customer Reviews — Ottawa HVAC PROS',
  description:
    'Read what Ottawa and Orléans homeowners say about Ottawa HVAC PROS. 4.7-star Google rating from real customers who trust us with their heating and cooling.',
};

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
