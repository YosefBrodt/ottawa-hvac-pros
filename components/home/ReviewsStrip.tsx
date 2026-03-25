'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
};

const reviews: Review[] = [
  {
    name: 'Melissa T.',
    location: 'Orléans, ON',
    rating: 5,
    text: 'Furnace died on a Friday night in January. They were at my door by 9am Saturday. Honest pricing, fast work, and no upselling. Will never use anyone else.',
    date: 'January 2025',
  },
  {
    name: 'Ryan K.',
    location: 'Ottawa, ON',
    rating: 5,
    text: 'Had three other companies quote me for a new AC. Ottawa HVAC PROS came in clear and honest — installed it two days later. Professional from start to finish.',
    date: 'August 2024',
  },
  {
    name: 'Danielle F.',
    location: 'Gloucester, ON',
    rating: 4,
    text: 'Great service, showed up on time and explained everything clearly. Sorted out our ductwork issue in one visit. Would strongly recommend.',
    date: 'March 2025',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          viewBox="0 0 20 20"
          fill={i < rating ? 'currentColor' : 'rgba(0,0,0,0.12)'}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.369 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.369-2.448a1 1 0 00-1.175 0l-3.369 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function ReviewsStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full py-20 md:py-24 px-4 sm:px-6 bg-stitch-surface border-y-2 border-stitch-surface-container">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="h-0.5 w-12 bg-red shrink-0" />
          <h2 className="font-condensed font-black text-navy uppercase tracking-tight text-3xl md:text-4xl">
            Verified clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              className={`bg-stitch-surface-container p-8 md:p-10 border-b-4 ${
                i === 1 ? 'border-red' : 'border-border-light'
              }`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.06 + i * 0.08, ease }}
            >
              <Stars rating={review.rating} />
              <p className="font-barlow text-navy italic mb-6 leading-relaxed text-sm md:text-base">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-condensed font-black text-body tracking-widest text-xs uppercase">
                — {review.name}, {review.location}
              </p>
              <p className="font-barlow text-body/70 text-xs mt-1">{review.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
