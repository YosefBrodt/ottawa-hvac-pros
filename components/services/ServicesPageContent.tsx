'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/layout/CtaBand';

const services = [
  {
    accentColor: '#0d2d5e',
    title: 'Heating services',
    href: '/services/heating',
    summary:
      'Furnace installation, repair & maintenance — keeping your family warm through every Ottawa winter.',
    items: [
      'Furnace repair & emergency service',
      'New furnace installation (natural gas, propane)',
      'Annual furnace maintenance & tune-ups',
      'Heat pump installation & repair',
      'Boiler service & repair',
      'Thermostat installation & programming',
    ],
  },
  {
    accentColor: '#c0392b',
    title: 'Air conditioning',
    href: '/services/air-conditioning',
    summary: 'Central AC, ductless mini-splits, and seasonal tune-ups for Ottawa summers.',
    items: [
      'Central air conditioner installation',
      'AC repair & refrigerant top-up',
      'Ductless mini-split systems',
      'Seasonal AC tune-ups',
      'Smart thermostat integration',
      'AC unit replacement & assessment',
    ],
  },
  {
    accentColor: '#1a4a8a',
    title: 'Air quality',
    href: '/services/air-quality',
    summary: 'Breathe cleaner air — filtration, humidification, UV purification, and duct cleaning.',
    items: [
      'HEPA & high-efficiency air filtration',
      'Whole-home humidifier installation',
      'UV air purifier systems',
      'Professional duct cleaning',
      'HRV / ERV installation & service',
      'Carbon monoxide & CO2 monitoring',
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesPageContent() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Our services"
        description="From emergency furnace repairs on the coldest January night to new AC installations before summer — we handle the full range of home comfort services across Ottawa and Orléans."
      />

      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-0 relative z-10 divide-y divide-navy/15 border border-navy/15">
          {services.map((svc, index) => (
            <motion.div
              key={svc.title}
              className="group border-b-4 border-transparent hover:border-red transition-colors bg-stitch-surface-container"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease }}
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: svc.accentColor }} />
              <div className="p-6 md:p-10">
                <h2 className="font-condensed font-bold md:font-extrabold uppercase mb-3 text-navy tracking-tight text-2xl md:text-3xl">
                  {svc.title}
                </h2>
                <p className="font-barlow text-body mb-8 max-w-[540px] text-sm md:text-base leading-relaxed">
                  {svc.summary}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0"
                        style={{ width: '6px', height: '6px', backgroundColor: svc.accentColor }}
                      />
                      <span className="font-barlow text-body text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  className="inline-flex mt-8 items-center font-condensed font-semibold uppercase tracking-wide text-sm text-red hover:underline underline-offset-4"
                >
                  Full {svc.title.toLowerCase()} guide →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to book a service?"
        subtitle="Same-day appointments often available. Call us or send a message — we respond fast."
        secondaryHref="/contact"
        secondaryLabel="Send a message"
      />
    </>
  );
}
