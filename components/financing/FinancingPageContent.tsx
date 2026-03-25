'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';

const plans = [
  {
    name: '0% for 12 months',
    badge: 'Most Popular',
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
        title="HVAC Financing"
        description={
          "Don't let budget hold your family back from comfort. We offer flexible financing options so you can get the HVAC system you need today."
        }
      />

      <section className="relative w-full py-16 md:py-20 px-4 bg-white overflow-hidden">
        <div
          className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-blue-mid/10 blur-3xl pointer-events-none"
          aria-hidden
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="flex flex-col rounded-2xl border border-border-light/90 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: plan.badgeColor }} />
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <span
                    className="inline-block px-3 py-1 rounded-full font-barlow font-medium text-white w-fit shadow-sm"
                    style={{ fontSize: '10px', letterSpacing: '0.04em', backgroundColor: plan.badgeColor }}
                  >
                    {plan.badge}
                  </span>
                  <h2
                    className="font-condensed font-bold uppercase"
                    style={{ fontSize: '20px', color: '#0d2d5e', letterSpacing: '0.04em' }}
                  >
                    {plan.name}
                  </h2>
                  <p className="font-barlow text-body" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                    {plan.description}
                  </p>
                  <ul className="flex flex-col gap-2.5 mt-1 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span
                          className="shrink-0 rounded-full"
                          style={{ width: '6px', height: '6px', backgroundColor: plan.badgeColor }}
                        />
                        <span className="font-barlow text-body" style={{ fontSize: '13px' }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 pb-7 pt-0">
                  <a
                    href="tel:6138588525"
                    className="block w-full text-center py-3 rounded-lg font-barlow font-medium text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift-lg hover:brightness-110 active:scale-[0.98]"
                    style={{ backgroundColor: plan.badgeColor, fontSize: '13.5px' }}
                  >
                    Call to apply
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 md:mt-14 p-8 rounded-2xl border border-border-light bg-gradient-to-br from-[#f8fafc] to-white shadow-card">
              <h3 className="font-barlow font-semibold mb-2" style={{ fontSize: '16px', color: '#0d2d5e' }}>
                Questions about financing?
              </h3>
              <p className="font-barlow text-body" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                Call us at{' '}
                <a href="tel:6138588525" className="font-semibold text-red hover:underline underline-offset-2">
                  (613) 858-8525
                </a>{' '}
                and we&apos;ll walk you through your options in minutes. No obligation, no pressure — just honest advice from people who live in your neighbourhood.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
