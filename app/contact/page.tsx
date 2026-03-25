'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

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

  return (
    <>
      <section className="w-full py-14 px-4" style={{ backgroundColor: '#0d2d5e' }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="font-barlow font-medium uppercase mb-3"
            style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}
          >
            Get in touch
          </p>
          <h1
            className="font-condensed font-bold uppercase text-white mb-4"
            style={{ fontSize: 'clamp(30px, 5vw, 46px)', letterSpacing: '0.03em', lineHeight: 1.1 }}
          >
            Contact Us
          </h1>
          <p
            className="font-barlow text-white/65"
            style={{ fontSize: '15px', maxWidth: '480px', lineHeight: '1.65' }}
          >
            For fastest response call{' '}
            <a href="tel:6138588525" className="text-white font-medium hover:opacity-80 transition-opacity">
              (613) 858-8525
            </a>
            . Or fill in the form below and we&apos;ll reply within a few hours.
          </p>
        </div>
      </section>

      <section className="w-full py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Info Panel */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="font-condensed font-bold uppercase mb-3" style={{ fontSize: '18px', color: '#0d2d5e', letterSpacing: '0.04em' }}>
                Contact details
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  { label: 'Phone', value: '(613) 858-8525', href: 'tel:6138588525' },
                  { label: 'Address', value: '1407 Clay Ct, Orléans, ON K4C 4T3' },
                  { label: 'Hours', value: 'Mon–Fri 8am–6pm · Sat 9am–4pm · Emergency 24/7' },
                ].map((item) => (
                  <li key={item.label}>
                    <p className="font-barlow font-medium" style={{ fontSize: '12px', color: '#6b7a99', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '2px' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="font-barlow font-medium" style={{ fontSize: '14.5px', color: '#c0392b' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-barlow text-body" style={{ fontSize: '14px', lineHeight: '1.6' }}>{item.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-xl overflow-hidden border border-border-light"
              style={{ aspectRatio: '4/3', backgroundColor: '#e8ecf3', position: 'relative' }}
            >
              <iframe
                title="Ottawa HVAC PROS location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9!2d-75.5180!3d45.4765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0b8e11!2sOrl%C3%A9ans%2C+Ottawa%2C+ON!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form Panel */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{ width: '56px', height: '56px', backgroundColor: '#0d2d5e' }}
                >
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-condensed font-bold uppercase" style={{ fontSize: '24px', color: '#0d2d5e', letterSpacing: '0.04em' }}>
                  Message sent!
                </h2>
                <p className="font-barlow text-body" style={{ fontSize: '14px', maxWidth: '320px', lineHeight: '1.65' }}>
                  Thanks, {form.name.split(' ')[0]}! We&apos;ll get back to you within a few hours. For urgent issues, call us directly at (613) 858-8525.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field} className="flex flex-col gap-1.5">
                      <label className="font-barlow font-medium" style={{ fontSize: '12px', color: '#6b7a99', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {field === 'name' ? 'Full name *' : 'Email address *'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        className="px-4 py-2.5 rounded border font-barlow outline-none focus:ring-2 focus:ring-[#0d2d5e]/20"
                        style={{ fontSize: '13.5px', borderColor: '#d8dde8', color: '#0d2d5e' }}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-barlow font-medium" style={{ fontSize: '12px', color: '#6b7a99', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="px-4 py-2.5 rounded border font-barlow outline-none focus:ring-2 focus:ring-[#0d2d5e]/20"
                      style={{ fontSize: '13.5px', borderColor: '#d8dde8', color: '#0d2d5e' }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-barlow font-medium" style={{ fontSize: '12px', color: '#6b7a99', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Service needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="px-4 py-2.5 rounded border font-barlow outline-none focus:ring-2 focus:ring-[#0d2d5e]/20 bg-white"
                      style={{ fontSize: '13.5px', borderColor: '#d8dde8', color: form.service ? '#0d2d5e' : '#aab0c0' }}
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
                <div className="flex flex-col gap-1.5">
                  <label className="font-barlow font-medium" style={{ fontSize: '12px', color: '#6b7a99', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe the issue or what you need..."
                    className="px-4 py-2.5 rounded border font-barlow outline-none focus:ring-2 focus:ring-[#0d2d5e]/20 resize-none"
                    style={{ fontSize: '13.5px', borderColor: '#d8dde8', color: '#0d2d5e' }}
                  />
                </div>
                <button
                  type="submit"
                  className="self-start px-7 py-3 rounded font-barlow font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#c0392b', fontSize: '14px' }}
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
