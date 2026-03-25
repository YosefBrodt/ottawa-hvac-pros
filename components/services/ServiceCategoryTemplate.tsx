'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/layout/CtaBand';

const ease = [0.22, 1, 0.36, 1] as const;
const TEL = '6138588525';
const TEL_DISPLAY = '(613) 858-8525';

export type ServiceCategoryTemplateProps = {
  eyebrow: string;
  title: string;
  heroDescription: string;
  intro: string;
  sections: { heading: string; body: string }[];
  bullets: string[];
  accentBar: 'navy' | 'red' | 'blue';
};

const accentClass = {
  navy: 'bg-navy',
  red: 'bg-red',
  blue: 'bg-blue-mid',
} as const;

export function ServiceCategoryTemplate({
  eyebrow,
  title,
  heroDescription,
  intro,
  sections,
  bullets,
  accentBar,
}: ServiceCategoryTemplateProps) {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={heroDescription} />

      <section className="relative w-full py-14 md:py-20 px-4 sm:px-6 lg:px-12 bg-stitch-surface border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="min-w-0"
            >
              <p className="font-barlow text-body text-base md:text-lg leading-[1.75] font-medium text-stitch-on-surface/95 mb-10 max-w-2xl">
                {intro}
              </p>

              <div className="h-px w-16 bg-red/80 mb-10" aria-hidden />

              {sections.map((block, i) => (
                <div key={block.heading} className={i > 0 ? 'mt-12 pt-10 border-t border-navy/10' : ''}>
                  <h2 className="font-condensed font-bold md:font-extrabold text-navy uppercase tracking-tight text-xl md:text-2xl mb-4">
                    {block.heading}
                  </h2>
                  <p className="font-barlow text-body leading-[1.75] text-[15px] md:text-base">{block.body}</p>
                </div>
              ))}

              <div className="mt-12 pt-10 border-t border-navy/10">
                <h2 className="font-condensed font-bold md:font-extrabold text-navy uppercase tracking-tight text-lg mb-6">
                  What we can help with
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bullets.map((item) => (
                    <li key={item} className="flex gap-3 items-start font-barlow text-body text-sm md:text-[15px] leading-relaxed">
                      <span className={`mt-2 shrink-0 w-1.5 h-1.5 ${accentClass[accentBar]}`} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/#estimate"
                  className="inline-flex items-center justify-center px-8 py-3.5 font-condensed font-semibold uppercase tracking-wide text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  Get a Free Estimate
                </Link>
                <Link href="/services" className="inline-flex items-center font-barlow text-sm text-body underline underline-offset-4 hover:text-navy">
                  ← All services
                </Link>
              </div>
            </motion.div>

            <aside className="lg:sticky lg:top-28 space-y-4">
              <div className="border border-navy/12 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(13,45,94,0.15)]">
                <p className="font-condensed font-semibold uppercase tracking-[0.15em] text-navy/70 text-[10px] mb-2">
                  Call dispatch
                </p>
                <a
                  href={`tel:${TEL}`}
                  className="font-condensed font-bold md:font-extrabold text-red text-2xl md:text-3xl block hover:opacity-90 transition-opacity tracking-tight"
                >
                  {TEL_DISPLAY}
                </a>
                <p className="font-barlow text-body text-sm mt-3 leading-relaxed">
                  Same-day service often available. Emergency line for urgent heating and cooling issues.
                </p>
                <a
                  href={`tel:${TEL}`}
                  className="mt-6 flex w-full items-center justify-center py-4 font-condensed font-semibold uppercase tracking-wide text-sm text-white bg-red hover:brightness-110 transition-all"
                >
                  Tap to call now
                </a>
              </div>
              <div className="border border-navy/10 bg-stitch-surface-container px-6 py-5">
                <p className="font-barlow text-body text-xs leading-relaxed">
                  Licensed &amp; insured · Serving Ottawa &amp; Orléans since 2008
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to book?"
        subtitle="Tell us what you need — we’ll give you clear pricing before any work begins."
        secondaryHref="/#estimate"
        secondaryLabel="Get a free estimate"
      />
    </>
  );
}
