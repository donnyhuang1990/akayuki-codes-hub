import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Akayuki Guides – Code Redemption & Beginner Tips',
  description: 'Read practical AKAYUKI: Steel Blossoms Red guides. Learn how to look up and redeem codes, understand beginner progression, and check important game information.',
  alternates: { canonical: '/guides/' },
};

const guides = [
  { href: '/guides/how-to-redeem/', n: '01', title: 'How to Redeem Akayuki Codes', desc: 'Find the in-game Codes menu, enter a code carefully, and understand common redemption errors.', tag: 'REDEMPTION' },
  { href: '/guides/beginner-guide/', n: '02', title: 'Akayuki Beginner Guide', desc: 'Learn the basic progression loop, blade upgrades, and family-name system using available game information.', tag: 'GETTING STARTED' },
];

export default function GuidesPage() {
  return (
    <div className="container page-wrap">
      <div className="eyebrow">PLAYER KNOWLEDGE</div>
      <h1 className="page-title">Akayuki <span>Guides.</span></h1>
      <p className="page-intro">Straightforward guides for players of AKAYUKI: Steel Blossoms Red. We focus on practical instructions and clearly identify details that need in-game confirmation.</p>
      <div className="guide-catalog">
        {guides.map((guide) => (
          <Link href={guide.href} className="catalog-card" key={guide.href}>
            <span className="catalog-number">{guide.n}</span>
            <div><span className="feature-kicker">{guide.tag}</span><h2>{guide.title}</h2><p>{guide.desc}</p><span className="card-link">Read guide ↗</span></div>
          </Link>
        ))}
      </div>
      <section className="guides-tools-panel">
        <div><strong>Looking for a code?</strong><p>Browse recorded code entries, review source notes, or look up an exact code in our local database.</p></div>
        <div className="guides-tools-links">
          <Link className="button button-ghost" href="/codes/">Browse all codes →</Link>
          <Link className="text-link" href="/code-checker/">Open Code Checker</Link>
        </div>
      </section>
      <div className="notice"><strong>Editorial note</strong><p>Game mechanics can change after updates. Where a menu name, keybind, or feature is not confirmed from a current in-game test, we avoid presenting it as guaranteed.</p></div>
    </div>
  );
}
