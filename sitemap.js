import { SITE, cities, services } from '../lib/data';
export default function sitemap() {
  const p = ['', '/about', '/services', '/contact', ...services.map(s => `/services/${s.slug}`), ...cities.map(c => `/web-development-company-in-${c.slug}`)];
  return p.map(x => ({ url: SITE.url + x, lastModified: new Date() }));
}
