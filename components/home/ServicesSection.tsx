'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

type ServiceCard = {
  num: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

const cards: ServiceCard[] = [
  {
    num: '01',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'High-efficiency furnace and ductwork',
    title: 'Heating',
    description:
      'Furnace installation, repair & maintenance. Keeping Ottawa families warm through every winter since 2008.',
  },
  {
    num: '02',
    image:
      'https://images.unsplash.com/photo-1631545744926-9d82d8d0b9d2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Residential air conditioning condenser',
    title: 'Air conditioning',
    description:
      'Central AC, ductless mini-splits, and seasonal tune-ups. Stay cool and efficient all summer.',
  },
  {
    num: '03',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ventilation ductwork and air quality',
    title: 'Air quality',
    description:
      'Filtration, humidifiers, UV purifiers & duct cleaning. Cleaner air for your family year-round.',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 md:mb-16 gap-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-condensed font-black text-navy uppercase leading-none mb-4 text-4xl md:text-6xl tracking-tighter">
                Core services
              </h2>
              <p className="text-lg text-body font-barlow leading-relaxed">
                Specialized solutions for residential homes — no shortcuts, just
                honest work and clear communication.
              </p>
            </div>
          </Reveal>
          <div className="hidden md:block shrink-0">
            <div className="w-32 h-2 bg-red" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-navy/20 border border-navy/20">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.05}>
              <div className="group relative aspect-[4/5] bg-navy overflow-hidden border-b-4 border-transparent hover:border-red transition-colors">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-0 p-6 md:p-8 w-full">
                  <span className="text-6xl font-condensed font-black text-white/10 absolute -top-10 left-6 md:left-8 select-none">
                    {card.num}
                  </span>
                  <h3 className="font-condensed font-black text-white text-2xl md:text-3xl uppercase mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="font-barlow text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-red font-condensed font-bold tracking-widest text-xs uppercase group-hover:translate-x-2 transition-transform"
                  >
                    Learn more
                    <span className="ml-2" aria-hidden>
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
