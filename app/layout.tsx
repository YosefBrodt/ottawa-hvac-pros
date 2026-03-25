import type { Metadata } from 'next';
import { Montserrat, Barlow } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/** Display / headings — roomier than condensed, pairs with Barlow */
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ottawa HVAC PROS — Heating & Cooling in Orléans, ON',
    template: '%s | Ottawa HVAC PROS',
  },
  description:
    'Licensed HVAC contractor serving Ottawa and Orléans since 2008. Furnace repair, AC installation, air quality services. Same-day service available. Call (613) 858-8525.',
  metadataBase: new URL('https://ottawahvacpro.ca'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${barlow.variable} font-barlow font-medium leading-relaxed antialiased bg-stitch-surface text-stitch-on-surface`}
      >
        <header className="sticky top-0 z-50 shadow-sm">
          <AnnouncementBar />
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
