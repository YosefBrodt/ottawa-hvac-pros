'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { PageHero } from '@/components/layout/PageHero';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    'px-4 py-3 border border-navy/15 bg-white font-barlow outline-none focus:ring-2 focus:ring-red/25 focus:border-red/40 text-stitch-on-surface text-sm rounded-none';

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
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-6 py-16 text-center border border-navy/15 bg-stitch-surface-container p-10">
                <div className="flex items-center justify-center w-14 h-14 bg-navy text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-condensed font-bold md:font-extrabold uppercase text-navy text-2xl tracking-tight">Message sent!</h2>
                <p className="font-barlow text-body text-sm max-w-md leading-relaxed">
                  Thanks, {form.name.split(' ')[0]}! We&apos;ll get back to you within a few hours. For urgent issues,
                  call us directly at (613) 858-8525.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-navy/15 bg-stitch-surface-container p-6 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field} className="flex flex-col gap-2">
                      <label className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body">
                        {field === 'name' ? 'Full name *' : 'Email address *'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body">
                      Phone number
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body">
                      Service needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} ${!form.service ? 'text-body/60' : ''}`}
                    >
                      <option value="">Select a service...</option>
                      <option>Furnace repair</option>
                      <option>Furnace installation</option>
                      <option>AC repair</option>
                      <option>AC installation</option>
                      <option>Air quality / duct cleaning</option>
                      <option>Annual maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe the issue or what you need..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="self-start px-10 py-4 font-condensed font-bold md:font-extrabold text-white bg-red hover:brightness-110 transition-all uppercase text-sm tracking-tight"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
