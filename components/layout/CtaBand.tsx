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
    <section className="relative w-full py-16 md:py-20 px-4 sm:px-6 bg-stitch-surface border-t border-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-navy/15 bg-stitch-surface-container p-8 md:p-10">
            <div>
              <h2 className="font-condensed font-bold md:font-extrabold uppercase mb-2 text-navy tracking-tight text-2xl md:text-3xl">
                {title}
              </h2>
              <p className="font-barlow text-body text-sm md:text-base leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="tel:6138588525"
                className="inline-flex items-center justify-center px-8 py-4 font-condensed font-bold md:font-extrabold text-white bg-red hover:brightness-110 transition-all uppercase text-sm tracking-tight"
              >
                (613) 858-8525
              </a>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center px-8 py-4 font-condensed font-bold text-navy border-2 border-navy bg-transparent hover:bg-navy hover:text-white transition-colors uppercase text-sm tracking-tight"
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
