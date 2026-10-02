import './globals.css';
import Link from 'next/link';
import { SITE } from '../lib/data';
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Web Development Company in Islamabad & Rawalpindi | Parwaz Digital', template: '%s | Parwaz Digital' },
  description: 'Parwaz Digital is a web development company in Islamabad and Rawalpindi offering custom web development, SEO, Shopify, WordPress, WooCommerce, AI apps and automation.',
  keywords: ['web development company in Islamabad','web development company in Rawalpindi','web development company in Lahore','web development company in Peshawar','SEO services Pakistan','Shopify developer Pakistan','AI automation'],
  openGraph: { title: 'Parwaz Digital', type: 'website', locale: 'en_PK' },
  alternates: { canonical: '/' },
};
export default function RootLayout({ children }) {
  const ld = { '@context':'https://schema.org', '@type':'ProfessionalService', name:SITE.name, url:SITE.url, telephone:SITE.phone, email:SITE.email, areaServed:['Islamabad','Rawalpindi','Peshawar','Lahore'] };
  return (
    <html lang="en"><body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <header><div className="wrap"><nav aria-label="Main">
        <Link href="/" className="logo">Parwaz <b>Digital</b></Link>
        <div className="links"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/contact">Contact Us</Link></div>
      </nav></div></header>
      <main>{children}</main>
      <footer><div className="wrap">
        <div>© {new Date().getFullYear()} {SITE.name}. Web development company in Pakistan.</div>
        <div>📞 <a href={`tel:${SITE.phone}`}>{SITE.phone}</a> · ✉️ <a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
      </div></footer>
    </body></html>
  );
}
