'use client';

import { useState } from 'react';

export default function PostalCodeBar() {
  const [postal, setPostal] = useState('');

  return (
    <section className="relative w-full py-4 px-4 bg-stitch-surface-container border-y border-navy/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <span
          className="font-condensed font-bold uppercase text-navy/70 shrink-0 flex items-center justify-center sm:justify-start py-1 text-sm tracking-[0.12em]"
        >
          Find your local expert
        </span>
        <input
          type="text"
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          placeholder="Enter your postal code..."
          className="flex-1 min-w-0 px-4 py-3 font-barlow text-stitch-on-surface placeholder-body/60 outline-none focus:ring-2 focus:ring-red/30 border border-navy/15 bg-white sm:max-w-md text-sm rounded-none"
        />
        <button
          className="px-8 py-3 font-condensed font-bold text-white shrink-0 bg-red hover:brightness-110 transition-all uppercase text-sm tracking-tight"
          onClick={() => {}}
          type="button"
        >
          Find location
        </button>
      </div>
    </section>
  );
}
