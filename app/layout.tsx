import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteAssets } from '@/config/siteAssets';
import { seoServices } from '@/components/site-data';

const homepageTitle =
  'Goodman Horizon | Care Coordination & Community Support in Maryland';
const homepageDescription =
  'Goodman Horizon provides compassionate care coordination, case management, and community-based support services across Maryland for youth, adults, and families.';
const homepageUrl = 'https://www.goodmanhorizon.com';
const organizationDescription =
  'Goodman Horizon provides compassionate care coordination, case management, group home support, and community-based services across Maryland for youth, adults, and families.';
const logoUrl = `${homepageUrl}${siteAssets.brand.logo}`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${homepageUrl}/#organization`,
      name: 'Goodman Horizon',
      url: homepageUrl,
      logo: logoUrl,
      email: 'info@goodmanhorizon.com',
      telephone: '2027351044',
      areaServed: {
        '@type': 'State',
        name: 'Maryland'
      },
      description: organizationDescription
    },
    {
      '@type': 'OfferCatalog',
      '@id': `${homepageUrl}/#services`,
      name: 'Goodman Horizon Maryland support services',
      url: `${homepageUrl}/services`,
      itemListElement: seoServices.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@id': `${homepageUrl}/#organization`
          },
          areaServed: {
            '@type': 'State',
            name: 'Maryland'
          }
        }
      }))
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(homepageUrl),
  title: homepageTitle,
  description: homepageDescription,
  keywords: [
    'care coordination Maryland',
    'case management Maryland',
    'group home services Maryland',
    'community support services Maryland',
    'youth support services Maryland',
    'family support Maryland',
    'housing support Maryland',
    'behavioral health support Maryland'
  ],
  robots: {
    index: true,
    follow: true
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
