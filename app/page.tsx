import Link from 'next/link';
import FeaturedCodes from '@/components/FeaturedCodes';
import { codes } from '@/lib/codes';
import { ROBLOX_GAME_URL } from '@/lib/site';

export default function Home() {
  const featured = codes.slice(0, 4);
  const lastSourceCheck = featured.reduce(
    (latest, item) => (item.lastChecked > latest ? item.lastChecked : latest),
    featured[0]?.lastChecked ?? 'Not available'
  );

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> INDEPENDENT PLAYER RESOURCE</div>
            <h1>AKAYUKI<br /><span>Codes & Guides.</span></h1>
            <p className="hero-lead">Find code information, explore gameplay guides, and make your next session in <em>AKAYUKI: Steel Blossoms Red</em> count.</p>
            <div className="hero-actions">
              <Link className="button" href="/codes/">Explore codes <span>→</span></Link>
              <Link className="button button-ghost" href="/guides/">Browse guides</Link>
            </div>
            <div className="hero-proof"><span>✦ Community-focused</span><span>✦ Clear status labels</span><span>✦ Free to use</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract red blossom and katana-inspired artwork">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="moon" />
            <div className="blade blade-one" /><div className="blade blade-two" />
            <div className="petal petal-one" /><div className="petal petal-two" /><div className="petal petal-three" />
            <div className="art-caption">STEEL<br />BLOSSOMS<br /><span>RED</span></div>
          </div>
        </div>
      </section>

      <section className="container section stats-strip">
        <div><strong>01</strong><span>Game focus</span></div>
        <div><strong>Free</strong><span>Community resource</span></div>
        <div><strong>Reviewed</strong><span>Source dates shown</span></div>
        <div><strong>Clear</strong><span>Code status labels</span></div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div><div className="eyebrow">START HERE</div><h2>Everything Akayuki,<br /><span>in one place.</span></h2></div>
          <p>Quick links to the tools and information players look for most.</p>
        </div>
        <div className="feature-grid">
          <Link className="feature-card feature-red" href="/codes/">
            <span className="feature-icon">✳</span><span className="feature-kicker">REWARDS DATABASE</span>
            <h3>Akayuki Codes</h3><p>Browse code entries, see their recorded status, and copy a code to try in-game.</p><span className="card-link">Browse codes ↗</span>
          </Link>
          <Link className="feature-card" href="/code-checker/">
            <span className="feature-icon">⌕</span><span className="feature-kicker">LOOKUP TOOL</span>
            <h3>Code Checker</h3><p>Search our local database to see whether a code has a published entry.</p><span className="card-link">Check a code ↗</span>
          </Link>
          <Link className="feature-card" href="/guides/">
            <span className="feature-icon">⌘</span><span className="feature-kicker">PLAYER KNOWLEDGE</span>
            <h3>Game Guides</h3><p>Read practical help for redeeming codes and getting started.</p><span className="card-link">Read guides ↗</span>
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">CODE DATABASE</div><h2>Recently reviewed<br /><span>Akayuki codes.</span></h2></div>
            <Link className="text-link" href="/codes/">View all codes ↗</Link>
          </div>
          <p className="featured-code-intro">Browse selected entries from our code database. Each card shows its recorded status and the date its sources were last checked.</p>
          <FeaturedCodes items={featured} />
          <p className="micro-note dark-note">A reported active label does not guarantee redemption. The in-game response is the final confirmation.</p>
          <p className="featured-code-date">Latest source-check date among these entries: {lastSourceCheck}</p>
        </div>
      </section>

      <section className="container section split-section">
        <div>
          <div className="eyebrow">NEW TO THE GAME?</div><h2>Start with the<br /><span>basics.</span></h2>
          <p className="body-copy">New players can start with our redemption walkthrough and beginner overview. Learn where to enter a code and what to check when a redemption fails.</p>
          <Link className="button" href="/guides/">Explore player guides <span>→</span></Link>
        </div>
        <div className="guide-stack">
          <Link href="/guides/how-to-redeem/" className="guide-link"><span>01</span><div><strong>How to redeem Akayuki codes</strong><small>A step-by-step walkthrough</small></div><b>↗</b></Link>
          <Link href="/guides/beginner-guide/" className="guide-link"><span>02</span><div><strong>Beginner guide</strong><small>Understand the basics</small></div><b>↗</b></Link>
          <a href={ROBLOX_GAME_URL} target="_blank" rel="noreferrer" className="guide-link"><span>03</span><div><strong>Open the Roblox experience</strong><small>Visit the game page</small></div><b>↗</b></a>
        </div>
      </section>

      <section className="container disclaimer">
        <strong>Independent fan resource</strong>
        <p>Akayuki Codes is not affiliated with, endorsed by, or sponsored by Roblox Corporation or the developers of AKAYUKI: Steel Blossoms Red. Game names and trademarks belong to their respective owners.</p>
      </section>
    </>
  );
}
