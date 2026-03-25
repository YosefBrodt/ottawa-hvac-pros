'use client';

import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20 px-4 hero-mesh noise-overlay">
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-20 -right-12 h-64 w-64 rounded-full bg-red/20 blur-3xl animate-float pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 -left-16 h-56 w-56 rounded-full bg-blue-mid/25 blur-3xl animate-float-delayed pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float-slow pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          className="font-barlow font-medium uppercase mb-3"
          style={{ fontSize: '11px', color: 'rgba(255,255,255,0.48)', letterSpacing: '0.1em' }}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="font-condensed font-bold uppercase text-white mb-4"
          style={{ fontSize: 'clamp(30px, 5vw, 48px)', letterSpacing: '0.03em', lineHeight: 1.08 }}
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="font-barlow text-white/72 max-w-[520px]"
          style={{ fontSize: '15px', lineHeight: '1.65' }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {description}
        </motion.p>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-navy-deep/35 to-transparent"
        aria-hidden
      />
    </section>
  );
}
