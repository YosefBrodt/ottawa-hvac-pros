'use client';

import { Reveal } from '@/components/ui/Reveal';

type WhyItem = {
  title: string;
  body: string;
};

const items: WhyItem[] = [
  {
    title: 'Same-day service available',
    body: 'When your furnace or AC breaks down, we move fast. Same-day appointments available across Ottawa and Orléans.',
  },
  {
    title: 'Upfront, honest pricing',
    body: 'You see the price before we start. No surprise invoices, no hidden fees — just straightforward service.',
  },
  {
    title: 'Licensed & fully insured',
    body: 'All technicians are licensed, insured, and trained to the highest Ontario standards. Your home is protected.',
  },
  {
    title: 'Trusted since 2008',
    body: '16+ years serving Ottawa homeowners with heating, cooling, and ventilation expertise you can count on.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative w-full py-16 md:py-20 px-4 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-red/[0.06] blur-3xl"
        aria-hidden
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <p
            className="font-barlow font-medium uppercase mb-2"
            style={{ fontSize: '11px', color: '#c0392b', letterSpacing: '0.1em' }}
          >
            Why Ottawa chooses us
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2
            className="font-condensed font-bold uppercase mb-12 md:mb-14"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#0d2d5e', letterSpacing: '0.03em' }}
          >
            The Ottawa HVAC PROS difference
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 + i * 0.07}>
              <div className="group relative h-full rounded-2xl border border-border-light bg-gradient-to-br from-white to-[#f8fafc] p-6 md:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-navy/12">
                <div className="flex gap-4">
                  <div className="relative mt-1 shrink-0">
                    <div
                      className="h-2.5 w-2.5 rounded-full bg-red shadow-[0_0_12px_rgba(192,57,43,0.45)] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-barlow font-semibold mb-2" style={{ fontSize: '15px', color: '#0d2d5e' }}>
                      {item.title}
                    </h3>
                    <p className="font-barlow text-body" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
