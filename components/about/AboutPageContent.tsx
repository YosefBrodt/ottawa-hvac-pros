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

      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start border-b border-navy/10 pb-16 md:pb-20">
          <Reveal>
            <div>
              <h2 className="font-condensed font-bold md:font-extrabold uppercase mb-6 text-navy tracking-tight text-3xl md:text-4xl">
                Who we are
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-barlow text-body text-sm md:text-base leading-relaxed">
                  Ottawa HVAC PROS was founded in 2008 by a licensed gas fitter who grew up in Orléans and wanted to
                  bring honest, expert HVAC service to the families in his own community.
                </p>
                <p className="font-barlow text-body text-sm md:text-base leading-relaxed">
                  Over 16 years later, we&apos;ve grown into a full-service HVAC company serving all of Ottawa — but
                  we&apos;ve never lost that neighbourhood feel. We show up on time, explain what we find, tell you the
                  price before we start, and leave your home cleaner than we found it.
                </p>
                <p className="font-barlow text-body text-sm md:text-base leading-relaxed">
                  All our technicians are fully licensed, insured, and trained on the latest heating and cooling systems
                  — including high-efficiency equipment and smart home integration.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2 className="font-condensed font-bold md:font-extrabold uppercase mb-8 text-navy tracking-tight text-xl md:text-2xl">
                Our milestones
              </h2>
            </Reveal>
            <div className="flex flex-col gap-0 divide-y divide-navy/10 border border-navy/15">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="flex gap-5 p-5 md:p-6 bg-stitch-surface-container border-l-4 border-l-transparent hover:border-l-red transition-colors"
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                >
                  <span className="shrink-0 font-condensed font-bold md:font-extrabold tabular-nums text-red text-lg min-w-[52px]">
                    {m.year}
                  </span>
                  <p className="font-barlow text-body text-sm leading-relaxed">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface-container border-y border-navy/10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-12 md:mb-14">
              <div className="h-0.5 w-12 bg-red shrink-0" />
              <h2 className="font-condensed font-bold md:font-extrabold uppercase text-navy tracking-tight text-3xl md:text-4xl">
                What drives us
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={0.06 + i * 0.06}>
                <div className="h-full p-8 md:p-10 bg-stitch-surface border border-navy/15 border-b-4 border-navy hover:border-red transition-colors">
                  <h3 className="font-condensed font-bold md:font-extrabold uppercase mb-3 text-navy text-sm tracking-tight">{v.label}</h3>
                  <p className="font-barlow text-body text-sm leading-relaxed">{v.body}</p>
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
