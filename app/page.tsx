import Link from 'next/link';
import { codes } from '@/lib/codes';
import { ROBLOX_GAME_URL } from '@/lib/site';

export default function Home() {
  const featured = codes.slice(0, 3);
  const guides = [
    { href: '/guides/beginner-guide/', title: 'Beginner Guide', desc: 'A complete beginner guide covering the basics, progression, and early game tips.', image: 'guide-image guide-image-one' },
    { href: '/guides/family-names/', title: 'Family Names & Reroll Guide', desc: 'Learn how Family Names work, rarity, how to reroll, and tips for choosing a good name.', image: 'guide-image guide-image-two' },
    { href: '/guides/how-to-redeem/', title: 'How to Redeem Codes', desc: 'Step-by-step instructions to redeem codes in Akayuki and claim your rewards.', image: 'guide-image guide-image-three' },
  ];
  return (
    <>
      <section className="approved-hero">
        <div className="approved-hero-inner">
          <div className="approved-hero-copy">
            <span className="approved-eyebrow">FAN-MADE PLAYER RESOURCE</span>
            <h1>Akayuki <span>Codes &amp; Guides</span></h1>
            <p>A fan-made hub for the Roblox game <strong>AKAYUKI: Steel Blossoms Red.</strong><br />Get the latest codes, check code status, and read practical guides for leveling, weapon upgrades, and family names.</p>
            <div className="approved-actions">
              <Link href="/codes/" className="approved-button">♢ &nbsp;Explore Codes <b>→</b></Link>
              <Link href="/guides/" className="approved-button approved-button-outline">▣ &nbsp;Browse Guides</Link>
            </div>
          </div>
          <div className="approved-hero-credit">AKAYUKI: STEEL BLOSSOMS RED · FAN RESOURCE</div>
        </div>
      </section>

      <section className="approved-trust">
        <div className="approved-trust-inner">
          <div><b>♧</b><span><strong>Game Focus</strong><small>AKAYUKI: Steel Blossoms Red</small></span></div>
          <div><b>♔</b><span><strong>Free Resource</strong><small>100% fan-made and free to use</small></span></div>
          <div><b>♢</b><span><strong>Source Notes</strong><small>Based on official &amp; community sources</small></span></div>
          <div><b>▱</b><span><strong>Clear Status</strong><small>Show Working / Expired / Unverified</small></span></div>
        </div>
      </section>

      <div className="approved-content">
        <section className="approved-section approved-start">
          <div className="approved-section-title"><h2>Everything Akayuki, in one place</h2><p>Codes, tools, and guides for Akayuki players — simple, accurate and easy to use.</p></div>
          <div className="approved-feature-grid">
            <Link href="/codes/" className="approved-feature"><span className="approved-feature-icon">◇</span><span><strong>Akayuki Codes</strong><small>Browse the latest reported codes with rewards, source and last-checked dates.</small><b>View Codes →</b></span></Link>
            <Link href="/code-checker/" className="approved-feature"><span className="approved-feature-icon">⌕</span><span><strong>Code Checker</strong><small>Check if a code exists in our database and see its current status.</small><b>Try Code Checker →</b></span></Link>
            <Link href="/guides/" className="approved-feature"><span className="approved-feature-icon">▤</span><span><strong>Game Guides</strong><small>Step-by-step guides for leveling, blade upgrades, family names and more.</small><b>Browse Guides →</b></span></Link>
          </div>
        </section>

        <section className="approved-section approved-codes">
          <div className="approved-heading-row"><div className="approved-section-title"><h2>Recently listed codes</h2><p>Latest reported codes for Akayuki: Steel Blossoms Red. Check the source date and status before using.</p></div><Link href="/codes/" className="approved-view-all">View All Codes →</Link></div>
          <div className="approved-table-wrap"><table className="approved-code-table"><thead><tr><th>Code (Example)</th><th>Reported Reward</th><th>Status</th><th>Source / Last Checked</th><th></th></tr></thead><tbody>{featured.map(item => <tr key={item.code}><td><code>{item.code}</code></td><td>{item.reward}</td><td><span className={`approved-status approved-status-${item.status}`}>{item.status === 'reported-active' ? '● Reported active' : item.status === 'reported-expired' ? '● Reported expired' : '● Unverified'}</span></td><td>{item.sourceNote.split(':')[0]} / {item.lastChecked}</td><td><Link href="/codes/" className="approved-copy-link">View ↗</Link></td></tr>)}</tbody></table></div>
          <p className="approved-footnote">Status labels summarize published sources and are not an in-game verification. Always confirm in the game.</p>
        </section>

        <section className="approved-section approved-guides">
          <div className="approved-heading-row"><div className="approved-section-title"><h2>Player guides</h2><p>Essential guides to help you understand key systems and progress faster in Akayuki.</p></div><Link href="/guides/" className="approved-view-all">View All Guides →</Link></div>
          <div className="approved-guide-grid">{guides.map((guide) => <Link href={guide.href} className="approved-guide-card" key={guide.href}><div className={guide.image} role="img" aria-label={guide.title} /><div className="approved-guide-copy"><strong>{guide.title}</strong><p>{guide.desc}</p><b>→</b></div></Link>)}</div>
        </section>
      </div>
      <section className="approved-disclaimer"><div><strong>Independent fan-made resource</strong><p>This is an independent fan-made website for AKAYUKI: Steel Blossoms Red on Roblox. It is not affiliated with, endorsed by, or officially connected to the game's developers.</p></div><Link href={ROBLOX_GAME_URL} target="_blank" rel="noreferrer">Official Roblox experience ↗</Link></section>
    </>
  );
}
