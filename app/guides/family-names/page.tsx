import type { Metadata } from 'next';
import Link from 'next/link';
import { ROBLOX_GAME_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Akayuki Best Family Names – Reroll & Rarity Guide',
  description: 'Learn how Akayuki family names work, where to reroll with Rename Spins, how to compare buffs, and what is known about the best family names.',
  alternates: { canonical: '/guides/family-names/' },
};

export default function FamilyNamesGuide() {
  return (
    <article className="container article-wrap">
      <div className="eyebrow">GUIDE · FAMILY NAMES</div>
      <h1 className="page-title">Akayuki Best <span>Family Names &amp; Reroll Guide.</span></h1>
      <p className="page-intro">
        Looking for the best family name in AKAYUKI: Steel Blossoms Red?
        Here is what the game confirms about family-name rarity, stat bonuses,
        and rerolling—and what still needs reliable evidence.
      </p>
      <div className="article-meta">Akayuki Codes Editorial Team · Updated November 19, 2026 · Source-based guide</div>
      <div className="article-body">
        <div className="notice">
          <strong>What is verified?</strong>
          <p>
            The official Roblox game description confirms that family names are rolled
            in the Character menu, draw on historical samurai names, and grant stronger
            stat bonuses at higher rarities. The developer's 1.3.11 notes also say
            players can view full name buffs after spinning. We have not independently
            tested rolls in-game or verified a complete name list or drop-rate table.
          </p>
          <p><a href={ROBLOX_GAME_URL} target="_blank" rel="noreferrer">Check the official AKAYUKI game listing ↗</a></p>
        </div>

        <h2>What are family names in Akayuki?</h2>
        <p>
          Family names are a character progression feature, not just a cosmetic label.
          According to the developer's Roblox description, names are inspired by
          historical samurai, and rarer names provide better stat uplifts. This means
          the bonus attached to your roll matters when choosing whether to keep it.
        </p>

        <h2>How to roll or reroll a family name</h2>
        <ol>
          <li>Open <strong>AKAYUKI: Steel Blossoms Red</strong> on Roblox and locate the <strong>Character</strong> menu.</li>
          <li>Find the family-name roll option. Third-party walkthroughs describe using <strong>Rename Spins</strong> for another roll.</li>
          <li>After a roll, read the displayed rarity and <strong>full buffs</strong> before deciding what to do next.</li>
          <li>If you want to keep the result, follow the confirmation control shown by your current game client. Otherwise, reroll only if you have enough spins.</li>
        </ol>
        <p>
          The exact button positions can change between updates. The Character-menu
          location is confirmed by the official listing; the Rename Spins and
          confirmation sequence is described by independent walkthroughs, not
          independently tested by this site.
        </p>

        <h2>What is the best family name in Akayuki?</h2>
        <p>
          There is not enough dependable public evidence to name a single best family
          for every player. The developer confirms that higher rarity generally
          means stronger stat bonuses, but does not publish a complete family-by-family
          stat table or official ranking in the game description.
        </p>
        <p>
          For a useful decision, compare the <strong>actual buffs displayed after
          your roll</strong> with the way you play. Do not spend all your Rename Spins
          chasing an online S-tier list unless its names, effects, and game version
          are supported by reproducible evidence.
        </p>

        <h2>Known family-name examples and rarity evidence</h2>
        <p>
          Independent walkthroughs mention the examples below. These are
          <strong> third-party reports</strong>, not an official complete roster or
          an independently verified tier list.
        </p>
        <table>
          <thead><tr><th scope="col">Family name</th><th scope="col">Reported rarity</th><th scope="col">Evidence level</th></tr></thead>
          <tbody>
            <tr><td>Sato</td><td>Common</td><td>Third-party gameplay example</td></tr>
            <tr><td>Kaneko</td><td>Uncommon</td><td>Third-party gameplay example</td></tr>
            <tr><td>Oda</td><td>Legendary</td><td>Third-party gameplay example</td></tr>
          </tbody>
        </table>
        <p>
          Sources differ on the full set of rarity labels. We are not publishing
          unconfirmed rarity odds, a pity system, or numeric buffs as facts.
          For your own result, the live in-game label and buff panel take priority.
        </p>

        <h2>How to get more Rename Spins</h2>
        <p>
          Some published Akayuki codes report Rename Spins as rewards. Visit our
          <Link href="/codes/"> codes database</Link> to see each code's source-check
          date and status before trying it. Third-party gameplay guides also report
          spins from combat rewards, but the amount may vary; we cannot guarantee
          a fixed number per fight or level.
        </p>

        <h2>Frequently asked questions</h2>
        <h3>How do I roll a family name in Akayuki?</h3>
        <p>Use the Character menu. Independent guides describe spending Rename Spins, reviewing the rolled result, and confirming a name you want to keep.</p>
        <h3>Do rarer family names give better stats?</h3>
        <p>Yes. The official Roblox experience description says rarer names provide better stat uplifts. Check the full buff display after spinning for your specific result.</p>
        <h3>Is Oda the best family name?</h3>
        <p>Oda is reported as a Legendary example by third-party guides. That alone does not prove it is the best name for every build.</p>
        <h3>What are the odds of getting a Legendary or Exotic name?</h3>
        <p>We have not found a dependable official probability table. Any precise percentage would need a documented source or sufficiently rigorous in-game data.</p>
        <h3>Can I change my family name later?</h3>
        <p>The official listing says family names can be rolled in the Character menu. Independent guides describe returning there to reroll using Rename Spins; check your current game interface.</p>

        <h2>Sources and editorial limits</h2>
        <p>
          Primary source: <a href={ROBLOX_GAME_URL} target="_blank" rel="noreferrer">official Roblox experience and 1.3.11 update notes ↗</a>.
          Additional third-party references:
          {' '}<a href="https://akayuki-steel-blossoms-red.wiki/progression/akayuki-steel-blossoms-red-family-names" target="_blank" rel="noreferrer">family-name walkthrough ↗</a>
          {' '}and <a href="https://akayuki-steel-blossoms-red.wiki/progression/akayuki-steel-blossoms-red-how-to-get-spins" target="_blank" rel="noreferrer">Rename Spins walkthrough ↗</a>.
          The example names above are reported by these guides, not verified by our own gameplay.
        </p>
        <div className="article-cta">
          <strong>Continue your Akayuki progression</strong>
          <p>Learn the basics, review code rewards, or report a correction to our family-name information.</p>
          <div className="article-cta-links">
            <Link className="button" href="/guides/beginner-guide/">Beginner guide →</Link>
            <Link className="text-link" href="/codes/">Browse codes</Link>
            <Link className="text-link" href="/contact/">Report a correction</Link>
          </div>
        </div>
        <p className="article-related">Related: <Link href="/guides/">All player guides</Link> · <Link href="/guides/how-to-redeem/">How to redeem codes</Link></p>
      </div>
    </article>
  );
}
