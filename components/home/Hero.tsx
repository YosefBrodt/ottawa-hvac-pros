'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

function StarRating() {
  const gold = '#e8c547';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill={gold}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.369 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.369-2.448a1 1 0 00-1.175 0l-3.369 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
      <svg className="w-4 h-4" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="hero-half-star">
            <stop offset="50%" stopColor={gold} />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>
        </defs>
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.369 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.369-2.448a1 1 0 00-1.175 0l-3.369 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"
          fill="url(#hero-half-star)"
        />
      </svg>
    </div>
  );
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden py-14 md:py-16 px-4 hero-mesh noise-overlay">
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden />
      {/* Floating orbs */}
      <div
        className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-red/25 blur-3xl animate-float pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-blue-mid/30 blur-3xl animate-float-delayed pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-white/10 blur-2xl animate-float-slow pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          className="font-barlow text-white/55 uppercase tracking-widest mb-4"
          style={{ fontSize: '10px', letterSpacing: '0.1em' }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          Licensed · Insured · Same-Day Service · Serving Ottawa Since 2008
        </motion.p>

        <motion.h1
          className="font-condensed font-bold text-white uppercase leading-[0.95] mb-5"
          style={{ fontSize: 'clamp(36px, 6vw, 54px)', letterSpacing: '0.03em' }}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: easeOut }}
        >
          Ottawa&apos;s{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-red drop-shadow-sm">TRUSTED</span>
            <span
              className="absolute -inset-x-1 -inset-y-0.5 bg-red/15 blur-sm rounded-sm -z-0 animate-pulse-soft"
              aria-hidden
            />
          </span>{' '}
          HVAC Experts.
        </motion.h1>

        <motion.p
          className="font-barlow text-white/75 mb-8 max-w-[460px]"
          style={{ fontSize: '15px', lineHeight: '1.7' }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
        >
          Heating, cooling, and air quality service for Ottawa homeowners —
          delivered on time, upfront pricing, and backed by our satisfaction
          guarantee.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: easeOut }}
        >
          <a
            href="tel:6138588525"
            className="inline-flex items-center px-7 py-3.5 rounded-lg font-barlow font-medium text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift-lg hover:brightness-110 active:scale-[0.98]"
            style={{ backgroundColor: '#c0392b', fontSize: '14px' }}
          >
            Book a service call
          </a>
          <Link
            href="/services"
            className="inline-flex items-center px-7 py-3.5 rounded-lg font-barlow font-medium text-white border border-white/35 backdrop-blur-sm bg-white/5 hover:bg-white/12 hover:border-white/55 transition-all duration-300 hover:-translate-y-0.5 shadow-glow"
            style={{ fontSize: '14px' }}
          >
            View our services
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md w-fit"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: easeOut }}
        >
          <StarRating />
          <p className="font-barlow text-white/55" style={{ fontSize: '12px' }}>
            4.7 stars · 9 Google reviews · Orléans, ON
          </p>
        </motion.div>
      </div>

      {/* Bottom edge soft fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-deep/40 to-transparent"
        aria-hidden
      />
    </section>
  );
}
