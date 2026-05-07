import type { MetadataRoute } from 'next';
import { navLinks } from '@/components/site-data';

const siteUrl = 'https://www.goodmanhorizon.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${siteUrl}${link.href === '/' ? '' : link.href}`,
    lastModified: new Date(),
    changeFrequency: link.href === '/' ? 'monthly' : 'yearly',
    priority: link.href === '/' ? 1 : 0.7
  }));
}
