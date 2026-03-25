'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const inputClass =
  'px-4 py-3 border border-navy/15 bg-white font-barlow outline-none focus:ring-2 focus:ring-red/25 focus:border-red/40 text-stitch-on-surface text-sm rounded-none';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-6 py-16 text-center border border-navy/15 bg-stitch-surface-container p-10">
        <div className="flex items-center justify-center w-14 h-14 bg-navy text-white">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-condensed font-bold md:font-extrabold uppercase text-navy text-2xl tracking-tight">Message sent!</h2>
        <p className="font-barlow text-body text-sm max-w-md leading-relaxed">
          Thanks, {form.name.split(' ')[0]}! We&apos;ll get back to you within a few hours. For urgent issues, call us
          directly at (613) 858-8525.
        </p>
      </div>
    );
  }

  return (
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
          <label className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body">Phone number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body">Service needed</label>
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
        <label className="font-condensed font-bold uppercase tracking-widest text-[10px] text-body">Message *</label>
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
  );
}
