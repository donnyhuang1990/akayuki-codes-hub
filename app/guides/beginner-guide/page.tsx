import type { Metadata } from 'next';
import Link from 'next/link';
import { ROBLOX_GAME_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Akayuki Beginner Guide – Levels, Forge & Family Names',
  description: 'A beginner overview of leveling, blade upgrades, and family-name rolls in AKAYUKI: Steel Blossoms Red, based on the official Roblox game description.',
  alternates: { canonical: '/guides/beginner-guide/' },
};

export default function BeginnerGuide() {
  return (
    <article className="container article-wrap">
      <div className="eyebrow">GUIDE · GETTING STARTED</div>
      <h1 className="page-title">Akayuki <span>Beginner Guide.</span></h1>
      <p className="page-intro">
        Start with the core progression loop in AKAYUKI: Steel Blossoms Red:
        learn the katana combat, gain levels by fighting players or enemies,
        improve your blade at the Forge, and explore family-name bonuses.
      </p>
      <div className="article-meta">Akayuki Codes Editorial Team · Updated November 14, 2026 · 5 min read</div>
      <div className="article-body">
        <div className="notice">
          <strong>What this guide is based on</strong>
          <p>
            The progression details below are drawn from the game's public
            Roblox experience description. We have not independently tested
            every menu or mechanic in a live game session. If the current game
            differs, follow the in-game instructions.
          </p>
          <p><a href={ROBLOX_GAME_URL} target="_blank" rel="noreferrer">Open the official Roblox experience ↗</a></p>
        </div>

        <h2>1. Make sure you joined the correct game</h2>
        <p>
          This guide is for <em>AKAYUKI: Steel Blossoms Red</em> by
          @spidermanguy999. Check the experience title and creator on Roblox
          before using a code or following a guide. Games with similar names
          may have different systems and rewards.
        </p>

        <h2>2. Learn the combat before chasing upgrades</h2>
        <p>
          The official description presents the game as skill-based katana
          fighting in a snowy Japanese valley. You can fight other players or
          enemies to gain levels. Spend time learning movement, attack timing,
          spacing, and defensive options using the controls shown in your
          current game client.
        </p>
        <p>
          Avoid relying on old keybind lists: controls and interface details
          can change, and may differ by device. Use the in-game tutorial or
          current control display where available.
        </p>

        <h2>3. Understand the Forge milestones</h2>
        <p>
          The Roblox game description says that your blade can be enhanced at
          the Forge, with a new blade upgrade available every 5 levels and a
          maximum upgrade at level 50. Treat these as progression milestones:
          check the Forge when you reach a new 5-level threshold and read the
          current upgrade cost and effect before spending Currency.
        </p>
        <ul>
          <li>First listed milestone: level 5.</li>
          <li>Further milestones: every 5 levels.</li>
          <li>Maximum listed upgrade level: 50.</li>
        </ul>
        <p>
          The public description does not provide a complete upgrade-cost
          table, so we do not guess the amount needed at each level.
        </p>

        <h2>4. Explore family names carefully</h2>
        <p>
          The game description says you can roll for a family name in the
          Character menu. Names are inspired by historical samurai, and rarer
          names provide stronger stat uplifts. Read the live description of
          each result before deciding whether to keep it or roll again.
        </p>
        <p>
          We do not publish rarity odds or a best-family ranking without
          dependable evidence. A rare result is not automatically the best
          choice for every build.
        </p>

        <p>For family-name reroll steps and how to compare bonuses, read our <Link href="/guides/family-names/">Akayuki Family Names Guide</Link>.</p>

        <h2>5. Use promotional codes with care</h2>
        <p>
          Code lists on third-party websites can be outdated, incomplete, or
          incorrect. Check our <Link href="/codes/">Akayuki code database</Link>,
          pay attention to each entry's verification label, and treat the
          game's own redemption response as the final confirmation.
        </p>
        <p>
          Our <Link href="/code-checker/">Code Checker</Link> searches this
          website's records only. It cannot connect to Roblox or check your
          account.
        </p>

        <h2>6. Re-check information after game updates</h2>
        <p>
          Balance changes, interface updates, and bug fixes can affect how a
          guide applies. The Roblox experience description includes developer
          update notes; compare those notes with the current in-game menus
          before relying on an older walkthrough.
        </p>

        <div className="article-cta">
          <strong>Ready to use a promotional code?</strong>
          <p>Find a listed code, review its source notes, and follow the redemption walkthrough.</p>
          <div className="article-cta-links">
            <Link className="button" href="/codes/">Browse Akayuki codes →</Link>
            <Link className="text-link" href="/guides/how-to-redeem/">Read the redemption guide</Link>
          </div>
        </div>
        <p className="article-related">Related: <Link href="/code-checker/">Akayuki Code Checker</Link> · <Link href="/guides/">All player guides</Link></p>
      </div>
    </article>
  );
}
