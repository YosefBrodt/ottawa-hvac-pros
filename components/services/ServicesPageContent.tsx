'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/layout/CtaBand';

const services = [
  {
    accentColor: '#0d2d5e',
    title: 'Heating Services',
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
    title: 'Air Conditioning',
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
    title: 'Air Quality',
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
        title="Our Services"
        description="From emergency furnace repairs on the coldest January night to new AC installations before summer — we handle the full range of home comfort services across Ottawa and Orléans."
      />

      <section className="relative w-full py-16 md:py-20 px-4 bg-white overflow-hidden">
        <div
          className="absolute top-20 right-0 h-72 w-72 rounded-full bg-red/[0.04] blur-3xl pointer-events-none"
          aria-hidden
        />
        <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-10 relative z-10">
          {services.map((svc, index) => (
            <motion.div
              key={svc.title}
              className="group rounded-2xl border border-border-light/90 bg-gradient-to-br from-white to-[#fafbfc] overflow-hidden shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-0.5 hover:border-navy/10"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease }}
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: svc.accentColor }} />
              <div className="p-6 md:p-9">
                <h2
                  className="font-condensed font-bold uppercase mb-3"
                  style={{ fontSize: 'clamp(20px, 3vw, 26px)', color: '#0d2d5e', letterSpacing: '0.04em' }}
                >
                  {svc.title}
                </h2>
                <p
                  className="font-barlow text-body mb-8 max-w-[540px]"
                  style={{ fontSize: '14px', lineHeight: '1.65' }}
                >
                  {svc.summary}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 rounded-full ring-2 ring-white shadow-sm"
                        style={{ width: '7px', height: '7px', backgroundColor: svc.accentColor }}
                      />
                      <span className="font-barlow text-body" style={{ fontSize: '13.5px', lineHeight: '1.55' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
