'use client';

import { PageHero } from '@/components/layout/PageHero';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        description={
          <>
            For fastest response call{' '}
            <a href="tel:6138588525" className="text-white font-semibold hover:underline underline-offset-2">
              (613) 858-8525
            </a>
            . Or fill in the form below and we&apos;ll reply within a few hours.
          </>
        }
      />

      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-stitch-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="font-condensed font-bold md:font-extrabold uppercase mb-6 text-navy tracking-tight text-xl">
                Contact details
              </h2>
              <ul className="flex flex-col gap-6">
                {[
                  { label: 'Phone', value: '(613) 858-8525', href: 'tel:6138588525' },
                  { label: 'Address', value: '1407 Clay Ct, Orléans, ON K4C 4T3' },
                  { label: 'Hours', value: 'Mon–Fri 8am–6pm · Sat 9am–4pm · Emergency 24/7' },
                ].map((item) => (
                  <li key={item.label}>
                    <p className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="font-barlow font-semibold text-red text-base hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-barlow text-body text-sm leading-relaxed">{item.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden border border-navy/15 aspect-[4/3] bg-stitch-surface-container">
              <iframe
                title="Ottawa HVAC PROS location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9!2d-75.5180!3d45.4765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0b8e11!2sOrl%C3%A9ans%2C+Ottawa%2C+ON!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '240px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
