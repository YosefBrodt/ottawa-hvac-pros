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
        title="Customer Reviews"
        description={
          "4.7 stars from real Ottawa homeowners. We don't pay for reviews — we earn them."
        }
      />

      <section className="relative w-full py-16 md:py-20 px-4 bg-white overflow-hidden">
        <div
          className="absolute top-24 right-10 h-56 w-56 rounded-full bg-navy/[0.04] blur-3xl pointer-events-none"
          aria-hidden
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {reviews.map((r, i) => (
              <motion.article
                key={r.name + r.date}
                className="group rounded-2xl border border-border-light/90 bg-gradient-to-br from-white to-[#fafbfc] p-6 md:p-7 flex flex-col gap-4 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover hover:border-navy/10"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Stars rating={r.rating} variant="light" />
                  <span
                    className="font-barlow px-3 py-1 rounded-full border border-border-light/80 bg-white/80 text-navy text-[11px] font-medium"
                  >
                    {r.service}
                  </span>
                </div>
                <p className="font-barlow text-body flex-1" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex flex-wrap items-end justify-between gap-2 pt-3 border-t border-border-light">
                  <p className="font-barlow font-semibold" style={{ fontSize: '13px', color: '#0d2d5e' }}>
                    {r.name}{' '}
                    <span className="font-normal text-body">· {r.location}</span>
                  </p>
                  <p className="font-barlow text-[12px]" style={{ color: '#aab0c0' }}>
                    {r.date}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 md:mt-14 p-8 md:p-10 rounded-2xl text-center border border-border-light bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] shadow-card">
              <p className="font-barlow font-semibold mb-2" style={{ fontSize: '16px', color: '#0d2d5e' }}>
                Had a great experience?
              </p>
              <p className="font-barlow text-body mb-6 max-w-lg mx-auto" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                We&apos;d love a Google review. It takes two minutes and helps Ottawa homeowners find honest HVAC service.
              </p>
              <a
                href="https://g.page/r/CXqSdOm28tYzEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-barlow font-medium text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift-lg hover:brightness-110"
                style={{ backgroundColor: '#0d2d5e', fontSize: '14px' }}
              >
                Leave a Google Review
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
