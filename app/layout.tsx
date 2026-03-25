import type { Metadata } from 'next';
import { Barlow_Condensed, Barlow } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
        className={`${barlowCondensed.variable} ${barlow.variable} font-barlow antialiased bg-stitch-surface text-stitch-on-surface`}
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
