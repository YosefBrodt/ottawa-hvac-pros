'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Review = {
  name: string;
  location?: string;
  rating: number;
  text: string;
  date: string;
};

const reviews: Review[] = [
  {
    name: 'Damion Fusco',
    rating: 5,
    text: "I've had this company in my home several times over the years and each time they have been honest and professional. They've also gone out of their way to make sure things were fixed quickly — even on Christmas Eve. Would highly recommend.",
    date: '2 months ago',
  },
  {
    name: 'Chantale Raymond',
    rating: 5,
    text: "Joel and team are incredible. They installed a new AC unit and later a new furnace, and I couldn't be happier. Joel is completely honest — he won't sell you something you don't need, answers questions day or night, and made sure I understood exactly what was wrong. I will always recommend this company.",
    date: '3 years ago',
  },
  {
    name: 'Kristy Hardiman',
    rating: 5,
    text: 'Joe and his team are amazing! Got back to us quickly, completed the work fast, respected the quote, and left everything clean and tidy. Highly recommend.',
    date: '4 years ago',
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
          <h2 className="font-condensed font-bold md:font-extrabold text-navy uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl leading-tight">
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
              <p className="font-condensed font-bold md:font-extrabold text-body tracking-widest text-xs uppercase">
                — {review.name}
                {review.location ? `, ${review.location}` : ''}
              </p>
              <p className="font-barlow text-body/70 text-xs mt-1">{review.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
