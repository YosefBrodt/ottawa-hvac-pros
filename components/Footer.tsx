import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="w-full pt-10 pb-8 px-4"
      style={{ backgroundColor: '#091f42' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-3">
          <p className="text-white/60 font-barlow" style={{ fontSize: '13px' }}>
            © 2025 Ottawa HVAC PROS. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Careers', href: '/careers' },
              { label: 'ottawahvacpro.ca', href: 'https://ottawahvacpro.ca' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white/80 transition-colors font-barlow"
                style={{ fontSize: '12px' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-1 text-right">
          <p
            className="text-white/60 font-barlow"
            style={{ fontSize: '13px' }}
          >
            1407 Clay Ct, Orléans, ON K4C 4T3
          </p>
          <a
            href="tel:6138588525"
            className="font-barlow font-medium hover:text-white transition-colors"
            style={{ fontSize: '14px', color: '#c0392b' }}
          >
            (613) 858-8525
          </a>
        </div>
      </div>
    </footer>
  );
}
