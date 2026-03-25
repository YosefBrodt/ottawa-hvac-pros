'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const heroImage =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[min(42vh,400px)] md:min-h-[360px] flex items-center bg-stitch-primary-container overflow-hidden border-b-4 border-red">
      <div className="absolute inset-0 opacity-35">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover grayscale"
          sizes="100vw"
          priority
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-stitch-primary-container/95 via-stitch-primary-container/78 to-stitch-primary-container/88" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 md:py-16">
        <motion.p
          className="font-condensed font-bold uppercase mb-3 tracking-[0.2em] text-red text-xs"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="font-condensed font-bold md:font-extrabold uppercase text-white mb-4 tracking-tight md:tracking-tighter leading-snug md:leading-[0.95]"
          style={{ fontSize: 'clamp(1.85rem, 5vw, 3.25rem)' }}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.04, ease }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="font-barlow text-slate-300 max-w-2xl leading-[1.65] text-base md:text-lg font-medium"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
