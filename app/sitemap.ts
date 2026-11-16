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
    '/about/',
    '/contact/',
    '/privacy/',
  ];

  // The homepage, code list, and checker reflect the code database,
  // which was last reviewed on November 15, 2026.
  const codeDataLastModified = new Date('2026-11-15T00:00:00.000Z');
  const editorialLastModified = new Date('2026-11-14T00:00:00.000Z');

  return routes.map((route) => {
    const includesCodeData = route === '' || route === '/codes/' || route === '/code-checker/';

    return {
      url: `${SITE_URL}${route}`,
      lastModified: includesCodeData ? codeDataLastModified : editorialLastModified,
      changeFrequency: route === '/codes/' ? 'daily' : 'monthly',
      priority: route === '' ? 1 : route === '/codes/' ? 0.9 : 0.7,
    };
  });
}
