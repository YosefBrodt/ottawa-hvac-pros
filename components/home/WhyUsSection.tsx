'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

type WhyItem = {
  title: string;
  body: string;
  accent: 'red' | 'navy';
};

const items: WhyItem[] = [
  {
    title: 'Same-day service available',
    body: 'When your furnace or AC breaks down, we move fast. Same-day appointments available across Ottawa and Orléans.',
    accent: 'red',
  },
  {
    title: 'Upfront, honest pricing',
    body: 'You see the price before we start. No surprise invoices, no hidden fees — just straightforward service.',
    accent: 'navy',
  },
  {
    title: 'Licensed & fully insured',
    body: 'All technicians are licensed, insured, and trained to Ontario standards. Your home is protected.',
    accent: 'red',
  },
];

const techImage =
  'https://images.unsplash.com/photo-1504917615528-ad31c676eb39?auto=format&fit=crop&w=1200&q=80';

export default function WhyUsSection() {
  return (
    <section className="relative w-full bg-stitch-surface-container py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="relative z-10">
            <Reveal>
              <h2 className="font-condensed font-black text-navy uppercase leading-[0.95] mb-8 text-4xl md:text-6xl tracking-tighter">
                The Ottawa HVAC
                <br />
                PROS difference
              </h2>
            </Reveal>
            <div className="space-y-10">
              {items.map((item, i) => (
                <Reveal key={item.title} delay={0.05 + i * 0.06}>
                  <div className="flex gap-6">
                    <div
                      className={`shrink-0 w-1 ${item.accent === 'red' ? 'bg-red' : 'bg-navy'}`}
                    />
                    <div>
                      <h3 className="font-condensed font-black text-navy mb-2 uppercase tracking-tight text-lg">
                        {item.title}
                      </h3>
                      <p className="font-barlow text-body leading-relaxed text-sm md:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 font-condensed font-black tracking-tight uppercase hover:opacity-90 transition-opacity text-sm"
              >
                Our commitment
              </Link>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-[calc(100%-4px)] h-[calc(100%-4px)] border-4 border-red z-0 hidden sm:block" />
              <div className="relative z-10 w-full aspect-[4/5] max-h-[560px] sm:max-h-none sm:h-[520px] sm:min-h-[480px]">
                <Image
                  src={techImage}
                  alt="HVAC technician inspecting equipment"
                  fill
                  className="object-cover grayscale brightness-90"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <div className="absolute bottom-4 right-4 z-20 bg-navy px-5 py-4 hidden sm:block">
                <p className="text-white font-condensed font-black text-2xl md:text-3xl italic">
                  Pros only.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
