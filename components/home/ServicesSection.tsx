'use client';

import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

type ServiceCard = {
  accentColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

function HeatingIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="28" width="32" height="4" rx="2" fill="#0d2d5e" opacity="0.15"/>
      <path d="M10 28 Q10 16 20 16 Q30 16 30 28" stroke="#0d2d5e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M20 16 L20 8" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M15 12 L20 8 L25 12" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="22" r="3" fill="#0d2d5e" opacity="0.4"/>
    </svg>
  );
}

function ACIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="32" height="16" rx="4" stroke="#c0392b" strokeWidth="2.5"/>
      <line x1="12" y1="20" x2="28" y2="20" stroke="#c0392b" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="3" fill="#c0392b" opacity="0.3"/>
      <path d="M10 30 L10 34M20 30 L20 34M30 30 L30 34" stroke="#0d2d5e" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function FanIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="#1a4a8a" strokeWidth="2.5"/>
      <circle cx="20" cy="20" r="3" fill="#1a4a8a"/>
      <path d="M20 17 C20 12 14 8 14 14" stroke="#1a4a8a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M23 20 C28 20 32 14 26 14" stroke="#1a4a8a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M20 23 C20 28 26 32 26 26" stroke="#1a4a8a" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

const cards: ServiceCard[] = [
  {
    accentColor: '#0d2d5e',
    icon: <HeatingIcon />,
    title: 'HEATING',
    description:
      'Furnace installation, repair & maintenance. Keeping Ottawa families warm through every winter since 2008.',
  },
  {
    accentColor: '#c0392b',
    icon: <ACIcon />,
    title: 'AIR CONDITIONING',
    description:
      'Central AC, ductless mini-splits, and seasonal tune-ups. Stay cool and efficient all Ottawa summer.',
  },
  {
    accentColor: '#1a4a8a',
    icon: <FanIcon />,
    title: 'AIR QUALITY',
    description:
      'Filtration, humidifiers, UV purifiers & duct cleaning. Cleaner air for your family year-round.',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-16 md:py-20 px-4 section-soft overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-navy/5 blur-3xl"
        aria-hidden
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <p
            className="font-barlow font-medium uppercase mb-2"
            style={{ fontSize: '11px', color: '#c0392b', letterSpacing: '0.1em' }}
          >
            What we do
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="font-condensed font-bold uppercase mb-12"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#0d2d5e', letterSpacing: '0.03em' }}
          >
            Our core services
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={0.08 + i * 0.06}>
              <div className="group relative h-full rounded-2xl bg-white/90 backdrop-blur-sm overflow-hidden border border-border-light/90 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover hover:border-navy/15">
                <div
                  className="h-1.5 w-full origin-left scale-x-100 group-hover:scale-x-105 transition-transform duration-500"
                  style={{ backgroundColor: card.accentColor }}
                />
                <div className="p-7 flex flex-col gap-4 flex-1 min-h-[280px]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f8fafc] to-white border border-border-light/80 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {card.icon}
                  </div>
                  <h3
                    className="font-condensed font-bold uppercase"
                    style={{ fontSize: '18px', color: '#0d2d5e', letterSpacing: '0.04em' }}
                  >
                    {card.title}
                  </h3>
                  <p className="font-barlow text-body flex-1" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                    {card.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 font-barlow font-medium mt-1 group/link"
                    style={{ fontSize: '13px', color: '#c0392b' }}
                  >
                    <span className="border-b border-red/0 group-hover/link:border-red transition-colors">
                      Learn more
                    </span>
                    <span aria-hidden className="transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
