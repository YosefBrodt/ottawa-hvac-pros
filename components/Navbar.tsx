'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SERVICE_SUBLINKS } from '@/lib/services-nav';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'Financing', href: '/financing' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  const servicesActive = pathname.startsWith('/services');

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesOpen]);

  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full border-b-2 border-red bg-stitch-nav" style={{ minHeight: '56px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[56px]">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative flex items-center justify-center overflow-hidden rounded-full shrink-0 bg-white w-10 h-10 sm:w-11 sm:h-11">
            <Image
              src="/logo.png"
              alt="HVAC PROS Ottawa logo"
              width={44}
              height={44}
              className="object-contain object-center w-full h-full min-w-full min-h-full scale-[1.12] origin-center"
              priority
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

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {mainLinks[0] && (
            <Link
              href={mainLinks[0].href}
              className={`font-condensed font-semibold uppercase tracking-wide md:tracking-tight transition-colors text-sm ${
                pathname === '/'
                  ? 'text-red border-b-2 border-red pb-1'
                  : 'text-slate-300 hover:text-white pb-1 border-b-2 border-transparent'
              }`}
            >
              {mainLinks[0].label}
            </Link>
          )}

          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`font-condensed font-semibold uppercase tracking-wide md:tracking-tight transition-colors text-sm flex items-center gap-1.5 pb-1 border-b-2 ${
                servicesActive
                  ? 'text-red border-red'
                  : 'text-slate-300 hover:text-white border-transparent'
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full pt-2 w-[min(100vw-2rem,20rem)] z-[60]"
                role="menu"
              >
                <div className="border border-navy/15 bg-white shadow-[0_24px_50px_-12px_rgba(0,24,60,0.25)] py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-3 font-condensed font-semibold text-navy uppercase text-xs tracking-wide hover:bg-stitch-surface-container border-b border-navy/10"
                    role="menuitem"
                  >
                    All services overview
                  </Link>
                  {SERVICE_SUBLINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-stitch-surface-container transition-colors"
                      role="menuitem"
                    >
                      <span className="font-condensed font-semibold text-navy uppercase text-xs tracking-wide block">
                        {item.label}
                      </span>
                      <span className="font-barlow text-body text-[11px] leading-snug mt-0.5 block">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((link) => {
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
        <div className="md:hidden border-t border-white/10 px-4 pb-4 flex flex-col gap-0 bg-stitch-nav">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`font-condensed font-semibold uppercase py-3.5 border-b border-white/10 text-sm tracking-wide ${
              pathname === '/' ? 'text-red' : 'text-slate-300'
            }`}
          >
            Home
          </Link>

          <div className="border-b border-white/10">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((s) => !s)}
              className={`w-full flex items-center justify-between font-condensed font-semibold uppercase py-3.5 text-sm tracking-wide text-left ${
                servicesActive ? 'text-red' : 'text-slate-300'
              }`}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform shrink-0 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pb-3 pl-2 space-y-1">
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-barlow text-sm text-white/90 border-l-2 border-red pl-3"
                >
                  All services overview
                </Link>
                {SERVICE_SUBLINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 font-barlow text-sm text-slate-300 border-l-2 border-white/20 pl-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((link) => {
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
