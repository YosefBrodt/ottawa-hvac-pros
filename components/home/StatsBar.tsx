'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: '16+ YEARS', label: 'In Ottawa' },
  { value: '4.7 STARS', label: 'Google rating' },
  { value: 'LOCAL PROS', label: 'Ottawa-wide service' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function StatsBar() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full bg-stitch-surface-container border-b-4 border-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-navy/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className="py-8 px-8 md:px-12 text-center md:text-left"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
            >
              <div className="text-2xl sm:text-4xl font-condensed font-bold md:font-extrabold text-navy leading-tight mb-1.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-condensed font-semibold tracking-[0.12em] sm:tracking-[0.18em] text-body uppercase leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
