import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteAssets } from '@/config/siteAssets';

const homepageTitle =
  'Goodman Horizon | Care Coordination & Community Support in Maryland';
const homepageDescription =
  'Goodman Horizon provides compassionate care coordination, case management, and community-based support services across Maryland for youth, adults, and families.';
const homepageUrl = 'https://www.goodmanhorizon.com';

export const metadata: Metadata = {
  metadataBase: new URL(homepageUrl),
  title: homepageTitle,
  description: homepageDescription,
  icons: {
    icon: siteAssets.brand.favicon
  },
  alternates: {
    canonical: homepageUrl
  },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    type: 'website',
    url: homepageUrl
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
