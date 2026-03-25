import Link from 'next/link';

const serviceLinks = [
  { label: 'Heating', href: '/services/heating' },
  { label: 'Air conditioning', href: '/services/air-conditioning' },
  { label: 'Air quality', href: '/services/air-quality' },
  { label: 'All services', href: '/services' },
  { label: 'Financing', href: '/financing' },
];

const supportLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-stitch-nav text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-10 lg:px-12 py-14 max-w-none bg-stitch-surface-container">
        <div>
          <div className="font-condensed font-bold md:font-extrabold text-navy uppercase mb-4 text-lg tracking-tight">
            Ottawa HVAC PROS
          </div>
          <p className="font-barlow text-body text-sm leading-relaxed">
            Heating, cooling, and air quality for the Ottawa region since 2008.
            Licensed, insured, and committed to clear communication.
          </p>
        </div>
        <div>
          <h3 className="font-condensed font-bold md:font-extrabold text-navy mb-4 uppercase tracking-widest text-xs">
            Services
          </h3>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="font-barlow text-sm text-body hover:text-red transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-condensed font-bold md:font-extrabold text-navy mb-4 uppercase tracking-widest text-xs">
            Support
          </h3>
          <ul className="space-y-2">
            {supportLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="font-barlow text-sm text-body hover:text-red transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-condensed font-bold md:font-extrabold text-navy mb-4 uppercase tracking-widest text-xs">
            Dispatch
          </h3>
          <a
            href="tel:6138588525"
            className="font-condensed font-bold md:font-extrabold text-red text-2xl block mb-2 hover:opacity-90"
          >
            (613) 858-8525
          </a>
          <p className="font-barlow text-body text-xs uppercase tracking-widest">
            Same-day &amp; emergency service
          </p>
          <p className="font-barlow text-body text-sm mt-4">
            1407 Clay Ct, Orléans, ON K4C 4T3
          </p>
        </div>
      </div>
      <div className="bg-navy-deep px-6 sm:px-10 lg:px-12 py-6 border-t border-white/10">
        <p className="text-xs font-barlow tracking-wide text-white/45 uppercase">
          © {new Date().getFullYear()} Ottawa HVAC PROS. Established 2008.
        </p>
      </div>
    </footer>
  );
}
