'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Financing', href: '/financing' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: '#0d2d5e', height: 'auto', minHeight: '54px' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[54px]">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div
            className="rounded-full bg-white flex items-center justify-center overflow-hidden"
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
            <span
              className="font-condensed font-bold text-white uppercase tracking-wide"
              style={{ fontSize: '14px', letterSpacing: '0.04em' }}
            >
              Ottawa HVAC PROS
            </span>
            <span
              className="text-white/50 font-barlow"
              style={{ fontSize: '10px' }}
            >
              Orléans, Ontario
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors font-barlow font-medium"
              style={{ fontSize: '13px' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Phone CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:6138588525"
            className="hidden sm:flex items-center px-4 py-1.5 rounded-full font-barlow font-medium text-white hover:opacity-90 transition-opacity shrink-0"
            style={{ backgroundColor: '#c0392b', fontSize: '13px' }}
          >
            (613) 858-8525
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-1 w-8 h-8 items-center"
            aria-label="Toggle menu"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/10 px-4 pb-4 flex flex-col gap-3"
          style={{ backgroundColor: '#0d2d5e' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white transition-colors font-barlow font-medium py-2 border-b border-white/10"
              style={{ fontSize: '14px' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:6138588525"
            className="flex items-center justify-center px-4 py-2.5 rounded-full font-barlow font-medium text-white mt-2"
            style={{ backgroundColor: '#c0392b', fontSize: '14px' }}
          >
            (613) 858-8525
          </a>
        </div>
      )}
    </nav>
  );
}
