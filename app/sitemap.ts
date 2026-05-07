import type { MetadataRoute } from 'next';
import { navLinks } from '@/components/site-data';
import { servicePageSlugs } from '@/components/service-pages';

const siteUrl = 'https://www.goodmanhorizon.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const navigationUrls = navLinks.map((link) => ({
    url: `${siteUrl}${link.href === '/' ? '' : link.href}`,
    lastModified: new Date(),
    changeFrequency: link.href === '/' ? ('monthly' as const) : ('yearly' as const),
    priority: link.href === '/' ? 1 : 0.7
  }));

  const serviceUrls = servicePageSlugs.map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.8
  }));

  return [...navigationUrls, ...serviceUrls];
}
