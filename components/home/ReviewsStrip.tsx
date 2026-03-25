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

const gold = '#e8c547';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5"
          viewBox="0 0 20 20"
          fill={i < rating ? gold : 'rgba(255,255,255,0.12)'}
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
    <section className="relative w-full py-16 md:py-20 px-4 overflow-hidden bg-navy">
      <div
        className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-red/20 blur-3xl animate-float pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-mid/25 blur-3xl animate-float-slow pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,255,255,0.08),transparent)] pointer-events-none" aria-hidden />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          className="font-barlow font-medium uppercase mb-2"
          style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          What Ottawa homeowners say
        </motion.p>
        <motion.h2
          className="font-condensed font-bold uppercase text-white mb-10 md:mb-12"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '0.03em' }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05, ease }}
        >
          Trusted by your neighbours
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-1 hover:bg-white/[0.11] hover:border-white/20"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease }}
            >
              <Stars rating={review.rating} />
              <p
                className="font-barlow text-white/[0.88] flex-1"
                style={{ fontSize: '13.5px', lineHeight: '1.65' }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="pt-2 border-t border-white/10">
                <p className="font-barlow font-medium text-white" style={{ fontSize: '13px' }}>
                  {review.name}
                </p>
                <p className="font-barlow text-white/45" style={{ fontSize: '11px' }}>
                  {review.location} · {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
