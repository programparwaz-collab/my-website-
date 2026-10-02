import Link from 'next/link';
import { cities, services } from '../lib/data';
export default function Home() {
  return (<>
    <div className="wrap hero">
      <h1>Web development company in Islamabad and Rawalpindi</h1>
      <p className="lead">We build fast websites, online stores and AI tools for businesses across Pakistan.</p>
      <Link className="btn" href="/contact">Get a free quote</Link><Link className="btn alt" href="/services">See services</Link>
    </div>
    <section className="wrap"><h2>Our services</h2>
      <div className="grid">{services.map(s => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="card"><div className="i" aria-hidden>{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></Link>))}
      </div></section>
    <section className="wrap"><h2>Web development company in your city</h2>
      <div className="chips">{cities.map(c => <Link key={c.slug} className="chip" href={`/web-development-company-in-${c.slug}`}>📍 {c.name}</Link>)}</div></section>
  </>);
}
