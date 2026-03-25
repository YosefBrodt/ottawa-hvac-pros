'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Stat = {
  value: string;
  accent?: string;
  label: string;
};

const stats: Stat[] = [
  { value: '16', accent: '+', label: 'Years serving Ottawa' },
  { value: '4.7', accent: '★', label: 'Google rating' },
  { value: '100', accent: '%', label: 'Satisfaction goal' },
  { value: '24/7', label: 'Emergency service' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function StatsBar() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full bg-white py-12 md:py-14 px-4 border-y border-border-light/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/12 to-transparent" aria-hidden />
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border-light">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center justify-center py-8 px-4 gap-2"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease }}
          >
            <span
              className="font-condensed font-bold leading-none tracking-tight"
              style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', color: '#0d2d5e' }}
            >
              {stat.value}
              {stat.accent && <span style={{ color: '#c0392b' }}>{stat.accent}</span>}
            </span>
            <span
              className="font-barlow text-center uppercase tracking-wider"
              style={{ fontSize: '10px', color: '#6b7a99', lineHeight: 1.4 }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
