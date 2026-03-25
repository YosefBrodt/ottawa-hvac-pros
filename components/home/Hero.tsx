'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HVAC_HERO_IMAGE } from '@/lib/hvac-hero';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[min(100vh,920px)] md:min-h-[870px] flex items-center bg-stitch-primary-container overflow-hidden pt-6 pb-16 md:pb-24">
      <div className="absolute inset-0 opacity-40">
        <Image
          src={HVAC_HERO_IMAGE}
          alt="Residential furnace and HVAC equipment"
          fill
          className="object-cover grayscale"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-stitch-primary-container/95 via-stitch-primary-container/70 to-transparent md:from-stitch-primary-container/90" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl lg:max-w-[58%]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="inline-block bg-red text-white px-4 py-2 mb-6 font-condensed font-semibold tracking-[0.12em] sm:tracking-widest text-xs uppercase"
          >
            24/7 emergency repair available
          </motion.div>

          <motion.h1
            className="font-condensed font-bold md:font-extrabold text-white uppercase leading-[1.06] sm:leading-[0.98] tracking-tight sm:tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2.15rem, 7vw, 5.5rem)' }}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: easeOut }}
          >
            Engineered for{' '}
            <br className="hidden sm:block" />
            <span className="text-stitch-on-primary-muted">Ottawa climates.</span>
          </motion.h1>

          <motion.p
            className="font-barlow text-slate-300 text-[1.05rem] sm:text-lg md:text-2xl max-w-2xl mb-10 leading-[1.7] font-semibold"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easeOut }}
          >
            Heating, cooling, and air quality for Ottawa homeowners — same-day
            service, upfront pricing, and work you can trust since 2008.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: easeOut }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:6138588525"
                className="inline-flex items-center justify-center bg-red text-white text-base sm:text-lg md:text-xl font-condensed font-semibold md:font-bold px-8 sm:px-10 py-4 sm:py-5 tracking-wide sm:tracking-tight hover:brightness-110 transition-all uppercase"
              >
                Call (613) 858-8525
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white text-base sm:text-lg md:text-xl font-condensed font-semibold md:font-bold px-8 sm:px-10 py-4 sm:py-5 tracking-wide sm:tracking-tight hover:bg-white hover:text-stitch-nav transition-colors uppercase"
              >
                Explore services
              </Link>
            </div>
            <p className="font-barlow text-white/55 text-sm">
              Same-day appointments often available · Orléans &amp; Ottawa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
