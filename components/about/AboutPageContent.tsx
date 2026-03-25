'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/layout/CtaBand';

const milestones = [
  { year: '2008', text: 'Founded in Orléans, ON — started with residential furnace installs and repairs.' },
  { year: '2012', text: 'Expanded into full air conditioning services and earned Gas Fitter certifications.' },
  { year: '2016', text: 'Added air quality division: HRVs, humidifiers, UV purifiers, and duct cleaning.' },
  { year: '2024', text: 'Over 1,000 Ottawa families served. 4.7-star Google rating. Still growing.' },
];

const values = [
  { label: 'Honesty first', body: 'We quote the job, not the homeowner. No inflated prices, no hidden fees.' },
  { label: 'Community roots', body: 'Orléans is home. Every estimate we give is to someone in our own neighbourhood.' },
  { label: 'Expert craft', body: 'Continuous training on the latest systems means better work and longer-lasting results.' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutPageContent() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Ottawa HVAC PROS"
        description={
          "Local. Licensed. Trusted since 2008. We're a family-oriented HVAC company rooted in Orléans, ON — built on honest work and a commitment to Ottawa homeowners."
        }
      />

      <section className="relative w-full py-16 md:py-20 px-4 bg-white overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,720px)] h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent"
          aria-hidden
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <Reveal>
            <div>
              <h2
                className="font-condensed font-bold uppercase mb-6"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: '#0d2d5e', letterSpacing: '0.04em' }}
              >
                Who we are
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-barlow text-body" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                  Ottawa HVAC PROS was founded in 2008 by a licensed gas fitter who grew up in Orléans and wanted to bring honest, expert HVAC service to the families in his own community.
                </p>
                <p className="font-barlow text-body" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                  Over 16 years later, we&apos;ve grown into a full-service HVAC company serving all of Ottawa — but we&apos;ve never lost that neighbourhood feel. We show up on time, explain what we find, tell you the price before we start, and leave your home cleaner than we found it.
                </p>
                <p className="font-barlow text-body" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                  All our technicians are fully licensed, insured, and trained on the latest heating and cooling systems — including high-efficiency equipment and smart home integration.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2
                className="font-condensed font-bold uppercase mb-8"
                style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', color: '#0d2d5e', letterSpacing: '0.04em' }}
              >
                Our milestones
              </h2>
            </Reveal>
            <div className="flex flex-col gap-7">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="flex gap-5 rounded-xl p-4 -mx-2 border border-transparent hover:border-border-light/80 hover:bg-white/60 transition-colors duration-300"
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                >
                  <span
                    className="shrink-0 font-condensed font-bold tabular-nums"
                    style={{ color: '#c0392b', fontSize: '17px', minWidth: '48px' }}
                  >
                    {m.year}
                  </span>
                  <p className="font-barlow text-body" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                    {m.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-20 px-4 section-soft border-y border-border-light/80 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(13,45,94,0.06),transparent)] pointer-events-none"
          aria-hidden
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <h2
              className="font-condensed font-bold uppercase mb-10 text-center"
              style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: '#0d2d5e', letterSpacing: '0.04em' }}
            >
              What drives us
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={0.06 + i * 0.06}>
                <div className="h-full rounded-2xl border border-border-light/90 bg-white/90 backdrop-blur-sm p-6 md:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <h3 className="font-barlow font-semibold mb-2" style={{ fontSize: '15px', color: '#0d2d5e' }}>
                    {v.label}
                  </h3>
                  <p className="font-barlow text-body" style={{ fontSize: '13.5px', lineHeight: '1.65' }}>
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Experience the difference"
        subtitle="Book a service and see why Ottawa families keep coming back."
        secondaryHref="/services"
        secondaryLabel="View services"
      />
    </>
  );
}
