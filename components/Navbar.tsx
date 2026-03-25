'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Financing', href: '/financing' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="w-full border-b-2 border-red bg-stitch-nav"
      style={{ minHeight: '56px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[56px]">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div
            className="bg-white flex items-center justify-center overflow-hidden rounded-none"
            style={{ width: '38px', height: '38px' }}
          >
            <Image
              src="/logo.svg"
              alt="Ottawa HVAC PROS logo"
              width={38}
              height={38}
              className="object-contain w-full h-full p-0.5"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-condensed font-semibold md:font-bold text-white uppercase tracking-wide text-[14px] sm:text-[15px]">
              Ottawa HVAC PROS
            </span>
            <span className="text-white/50 font-barlow" style={{ fontSize: '10px' }}>
              Orléans, Ontario
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-condensed font-semibold uppercase tracking-wide md:tracking-tight transition-colors text-sm ${
                  active
                    ? 'text-red border-b-2 border-red pb-1'
                    : 'text-slate-300 hover:text-white pb-1 border-b-2 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:6138588525"
            className="hidden sm:inline-flex items-center px-5 py-2 font-condensed font-semibold text-white tracking-wide bg-red hover:opacity-90 transition-opacity shrink-0 text-sm uppercase"
          >
            (613) 858-8525
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-1 w-8 h-8 items-center"
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 flex flex-col gap-1 bg-stitch-nav">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-condensed font-semibold uppercase py-3.5 border-b border-white/10 text-sm tracking-wide ${
                  active ? 'text-red' : 'text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:6138588525"
            className="flex items-center justify-center px-4 py-3.5 font-condensed font-semibold text-white mt-2 bg-red uppercase text-sm tracking-wide"
          >
            (613) 858-8525
          </a>
        </div>
      )}
    </nav>
  );
}
