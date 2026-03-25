'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';

const plans = [
  {
    name: '0% for 12 months',
    badge: 'Most popular',
    badgeColor: '#c0392b',
    description: 'Perfect for seasonal replacements. No interest when paid in full within 12 months.',
    features: [
      'No interest for 12 months',
      'Affordable monthly payments',
      'Approved in minutes',
      'Available on all installations',
    ],
  },
  {
    name: 'Low-rate 60 months',
    badge: 'Best for budgets',
    badgeColor: '#1a4a8a',
    description: 'Spread the cost over 5 years with a competitive fixed interest rate.',
    features: [
      'Up to 60-month term',
      'Fixed monthly rate',
      'No prepayment penalty',
      'Furnaces, ACs & more',
    ],
  },
  {
    name: 'Same-as-cash',
    badge: 'Emergency option',
    badgeColor: '#0d2d5e',
    description: 'Immediate approval, zero interest if paid within 90 days. Great for urgent repairs.',
    features: [
      '90-day same-as-cash',
      'No hard credit pull required',
      'Shop with confidence',
      'Fast approval process',
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function FinancingPageContent() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="Flexible options"
        title="HVAC financing"
        description={
          "Don't let budget hold your family back from comfort. We offer flexible financing options so you can get the HVAC system you need today."
        }
      />

      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-y md:divide-y-0 divide-navy/15 border border-navy/15">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="flex flex-col bg-stitch-surface-container border-b-4 border-transparent hover:border-red transition-colors"
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: plan.badgeColor }} />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <span
                    className="inline-block px-3 py-1 font-condensed font-bold uppercase tracking-widest text-white w-fit text-[10px]"
                    style={{ backgroundColor: plan.badgeColor }}
                  >
                    {plan.badge}
                  </span>
                  <h2 className="font-condensed font-bold md:font-extrabold uppercase text-navy text-xl tracking-tight">{plan.name}</h2>
                  <p className="font-barlow text-body text-sm leading-relaxed">{plan.description}</p>
                  <ul className="flex flex-col gap-2.5 mt-1 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="shrink-0 w-1.5 h-1.5" style={{ backgroundColor: plan.badgeColor }} />
                        <span className="font-barlow text-body text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8 pt-0">
                  <a
                    href="tel:6138588525"
                    className="block w-full text-center py-4 font-condensed font-bold md:font-extrabold text-white uppercase text-sm tracking-tight hover:brightness-110 transition-all"
                    style={{ backgroundColor: plan.badgeColor }}
                  >
                    Call to apply
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 md:mt-16 p-8 md:p-10 border border-navy/15 bg-stitch-surface-container">
              <h3 className="font-condensed font-bold md:font-extrabold uppercase text-navy mb-3 text-lg tracking-tight">
                Questions about financing?
              </h3>
              <p className="font-barlow text-body text-sm leading-relaxed">
                Call us at{' '}
                <a href="tel:6138588525" className="font-semibold text-red hover:underline underline-offset-2">
                  (613) 858-8525
                </a>{' '}
                and we&apos;ll walk you through your options in minutes. No obligation, no pressure — just honest advice
                from people who live in your neighbourhood.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
