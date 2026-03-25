'use client';

import ContactForm from '@/components/contact/ContactForm';

export default function HomeContactSection() {
  return (
    <section id="estimate" className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface border-t-2 border-stitch-surface-container scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <div className="h-0.5 w-12 bg-red shrink-0" />
          <h2 className="font-condensed font-bold md:font-extrabold text-navy uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl leading-tight">
            Get a Free Estimate
          </h2>
        </div>
        <p className="font-barlow text-body text-base md:text-lg leading-relaxed max-w-2xl mb-10 md:mb-12">
          Tell us what you need — we&apos;ll reply within a few hours. For the fastest response, call{' '}
          <a href="tel:6138588525" className="text-red font-semibold hover:underline underline-offset-2">
            (613) 858-8525
          </a>
          .
        </p>
        <div className="max-w-4xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
