import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteAssets } from '@/config/siteAssets';

export const metadata: Metadata = {
  metadataBase: new URL('https://goodmanhorizon.com'),
  title: 'Goodman Horizon | Community Support & Case Management',
  description:
    'Goodman Horizon serves youth, adults, and families across Maryland with case management, referrals, and community-centered supports.',
  icons: {
    icon: siteAssets.brand.favicon
  },
  alternates: {
    canonical: 'https://goodmanhorizon.com'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
