'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Stars } from '@/components/ui/Stars';

const reviews = [
  {
    name: 'Melissa T.',
    location: 'Orléans, ON',
    rating: 5,
    service: 'Emergency furnace repair',
    date: 'January 2025',
    text: 'Furnace died on a Friday night in January. They were at my door by 9am Saturday. Honest pricing, fast work, and no upselling. Will never use anyone else.',
  },
  {
    name: 'Ryan K.',
    location: 'Ottawa, ON',
    rating: 5,
    service: 'AC installation',
    date: 'August 2024',
    text: 'Had three other companies quote me for a new AC. Ottawa HVAC PROS came in clear and honest — installed it two days later. Professional from start to finish.',
  },
  {
    name: 'Danielle F.',
    location: 'Gloucester, ON',
    rating: 4,
    service: 'Ductwork service',
    date: 'March 2025',
    text: 'Great service, showed up on time and explained everything clearly. Sorted out our ductwork issue in one visit. Would strongly recommend.',
  },
  {
    name: 'James W.',
    location: 'Barrhaven, ON',
    rating: 5,
    service: 'Furnace installation',
    date: 'November 2024',
    text: 'Replaced my 22-year-old furnace. The team was punctual, tidy, and walked me through the new thermostat programming. Very happy with the high-efficiency unit.',
  },
  {
    name: 'Sarah M.',
    location: 'Kanata, ON',
    rating: 5,
    service: 'Annual maintenance',
    date: 'October 2024',
    text: 'Have been using Ottawa HVAC PROS for annual tune-ups for 4 years. Always on time, always professional, and pricing has never changed without a good reason. Highly recommend.',
  },
  {
    name: 'Michel B.',
    location: 'Orléans, ON',
    rating: 5,
    service: 'Humidifier installation',
    date: 'February 2025',
    text: 'Had a whole-home humidifier installed to battle dry Ottawa winters. Quick appointment, they had everything needed on the truck. Difference has been night and day.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ReviewsPageContent() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="From your neighbours"
        title="Customer reviews"
        description={
          "4.7 stars from real Ottawa homeowners. We don't pay for reviews — we earn them."
        }
      />

      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface overflow-hidden border-b border-navy/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <motion.article
                key={r.name + r.date}
                className={`flex flex-col gap-4 p-8 md:p-10 bg-stitch-surface-container border-b-4 ${
                  i % 3 === 1 ? 'border-red' : 'border-border-light'
                }`}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Stars rating={r.rating} variant="amber" />
                  <span className="font-condensed font-bold uppercase tracking-widest text-[10px] text-navy border border-navy/20 px-2 py-1 bg-white">
                    {r.service}
                  </span>
                </div>
                <p className="font-barlow text-navy italic flex-1 text-sm md:text-base leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex flex-wrap items-end justify-between gap-2 pt-4 border-t border-navy/10">
                  <p className="font-condensed font-bold md:font-extrabold uppercase tracking-widest text-xs text-body">
                    — {r.name}, {r.location}
                  </p>
                  <p className="font-barlow text-body text-xs">{r.date}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 md:mt-16 p-8 md:p-10 text-center border border-navy/15 bg-stitch-surface-container">
              <p className="font-condensed font-bold md:font-extrabold uppercase text-navy mb-2 text-lg tracking-tight">
                Had a great experience?
              </p>
              <p className="font-barlow text-body mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                We&apos;d love a Google review. It takes two minutes and helps Ottawa homeowners find honest HVAC
                service.
              </p>
              <a
                href="https://g.page/r/CXqSdOm28tYzEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 font-condensed font-bold md:font-extrabold text-white bg-navy hover:opacity-90 transition-opacity uppercase text-sm tracking-tight"
              >
                Leave a Google review
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
