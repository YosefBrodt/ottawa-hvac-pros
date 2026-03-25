import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

type CtaBandProps = {
  title: string;
  subtitle: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({ title, subtitle, secondaryHref, secondaryLabel }: CtaBandProps) {
  return (
    <section className="relative w-full py-14 md:py-16 px-4 section-soft border-t border-border-light/80 overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-navy/5 blur-3xl"
        aria-hidden
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-2xl border border-border-light/90 bg-white/80 backdrop-blur-sm px-8 py-10 shadow-card">
            <div>
              <h2
                className="font-condensed font-bold uppercase mb-2"
                style={{ fontSize: 'clamp(20px, 3vw, 26px)', color: '#0d2d5e', letterSpacing: '0.04em' }}
              >
                {title}
              </h2>
              <p className="font-barlow text-body" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="tel:6138588525"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-barlow font-medium text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift-lg hover:brightness-110 active:scale-[0.98]"
                style={{ backgroundColor: '#c0392b', fontSize: '14px' }}
              >
                (613) 858-8525
              </a>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-barlow font-medium text-navy border border-navy/25 bg-white hover:bg-navy/5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ fontSize: '14px' }}
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
