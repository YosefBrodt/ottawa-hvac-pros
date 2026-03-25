'use client';

import { useState } from 'react';

export default function PostalCodeBar() {
  const [postal, setPostal] = useState('');

  return (
    <section className="relative w-full py-4 px-4 bg-navy-deep border-t-2 border-red shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <span
          className="font-condensed font-bold uppercase text-white/55 shrink-0 flex items-center justify-center sm:justify-start py-1"
          style={{ fontSize: '13px', letterSpacing: '0.06em' }}
        >
          Find your local expert
        </span>
        <input
          type="text"
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          placeholder="Enter your postal code..."
          className="flex-1 min-w-0 px-4 py-2.5 rounded-lg font-barlow text-white placeholder-white/35 outline-none focus:ring-2 focus:ring-white/25 focus:border-white/20 transition-shadow sm:max-w-md"
          style={{
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.14)',
            fontSize: '13px',
          }}
        />
        <button
          className="px-6 py-2.5 rounded-lg font-barlow font-medium text-white shrink-0 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift-lg hover:brightness-110 active:scale-[0.98]"
          style={{ backgroundColor: '#c0392b', fontSize: '13px' }}
          onClick={() => {}}
          type="button"
        >
          Find location
        </button>
      </div>
    </section>
  );
}
