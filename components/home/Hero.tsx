'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

const heroImage =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[min(100vh,920px)] md:min-h-[870px] flex items-center bg-stitch-primary-container overflow-hidden pt-6 pb-16 md:pb-24">
      <div className="absolute inset-0 opacity-40">
        <Image
          src={heroImage}
          alt="Industrial HVAC equipment and mechanical piping"
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
            className="inline-block bg-red text-white px-4 py-1.5 mb-6 font-condensed font-bold tracking-widest text-xs uppercase"
          >
            24/7 emergency repair available
          </motion.div>

          <motion.h1
            className="font-condensed font-black text-white uppercase leading-[0.95] tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: easeOut }}
          >
            Engineered for{' '}
            <br className="hidden sm:block" />
            <span className="text-stitch-on-primary-muted">Ottawa climates.</span>
          </motion.h1>

          <motion.p
            className="font-barlow text-slate-300 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed font-medium"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easeOut }}
          >
            Heating, cooling, and air quality for Ottawa homeowners — same-day
            service, upfront pricing, and work you can trust since 2008.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: easeOut }}
          >
            <a
              href="tel:6138588525"
              className="inline-flex items-center justify-center bg-red text-white text-lg md:text-xl font-condensed font-black px-10 py-5 tracking-tight hover:brightness-110 transition-all uppercase"
            >
              Book service now
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white text-lg md:text-xl font-condensed font-black px-10 py-5 tracking-tight hover:bg-white hover:text-stitch-nav transition-colors uppercase"
            >
              View our services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
