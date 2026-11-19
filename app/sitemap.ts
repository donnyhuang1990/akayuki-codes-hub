import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/codes/',
    '/code-checker/',
    '/guides/',
    '/guides/how-to-redeem/',
    '/guides/beginner-guide/',
    '/guides/family-names/',
    '/about/',
    '/contact/',
    '/privacy/',
  ];

  // Reflect actual page-content updates, not code verification dates.
  const refreshedPageDate = new Date('2026-11-17T00:00:00.000Z');
  const familyGuideDate = new Date('2026-11-19T00:00:00.000Z');
  const existingEditorialDate = new Date('2026-11-14T00:00:00.000Z');

  return routes.map((route) => {
    const refreshed = [
      '',
      '/codes/',
      '/code-checker/',
      '/guides/',
      '/guides/how-to-redeem/',
      '/guides/beginner-guide/',
    ].includes(route);

    return {
      url: `${SITE_URL}${route}`,
      lastModified: route === '/guides/family-names/' ? familyGuideDate : refreshed ? refreshedPageDate : existingEditorialDate,
      changeFrequency: route === '/codes/' ? 'daily' : 'monthly',
      priority: route === '' ? 1 : route === '/codes/' ? 0.9 : 0.7,
    };
  });
}
