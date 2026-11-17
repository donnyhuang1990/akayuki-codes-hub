import type { Metadata } from 'next';
import Link from 'next/link';
import { ROBLOX_GAME_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How to Redeem Akayuki Codes – Step-by-Step Guide',
  description: 'Find the in-game Codes menu in AKAYUKI: Steel Blossoms Red, enter a code carefully, and troubleshoot common redemption errors.',
  alternates: { canonical: '/guides/how-to-redeem/' },
};

export default function RedeemGuide() {
  return (
    <article className="container article-wrap">
      <div className="eyebrow">GUIDE · REDEMPTION</div>
      <h1 className="page-title">How to Redeem <span>Akayuki Codes.</span></h1>
      <p className="page-intro">
        A practical walkthrough for finding the in-game code panel, entering a
        code carefully, and understanding why a redemption may fail.
      </p>
      <div className="article-meta">Akayuki Codes Editorial Team · Updated November 14, 2026 · 5 min read</div>
      <div className="article-body">
        <div className="notice">
          <strong>Before you start</strong>
          <p>
            This walkthrough combines the public Roblox experience listing
            with instructions reported by third-party game guides. We have not
            independently recorded a successful redemption in-game. Menu
            placement can change after updates, so use the labels shown by
            your current game client.
          </p>
          <p><a href={ROBLOX_GAME_URL} target="_blank" rel="noreferrer">Open AKAYUKI: Steel Blossoms Red on Roblox ↗</a></p>
        </div>

        <h2>1. Launch the correct Roblox experience</h2>
        <p>
          Open <em>AKAYUKI: Steel Blossoms Red</em> by @spidermanguy999. Check
          the title and creator so you do not enter a different experience
          with a similar name.
        </p>

        <h2>2. Find the in-game Codes panel</h2>
        <p>
          Published walkthroughs describe a Codes option on the main menu.
          If you are already in the game, another guide reports that the M key
          opens a menu containing Codes on desktop. These descriptions may
          reflect different interface states or game versions; if neither
          matches your screen, inspect the current menus and tutorial rather
          than assuming the option is in a fixed location.
        </p>

        <h2>3. Copy the exact code from the database</h2>
        <p>
          Open the <Link href="/codes/">Akayuki codes database</Link> and copy
          the exact code string. Preserve capital letters, punctuation,
          underscores, and numbers. Do not copy the reward description or add
          spaces before or after the code.
        </p>

        <h2>4. Submit it in the game</h2>
        <p>
          Paste the code into the in-game code field and use the Redeem or
          equivalent button shown by the game. Read the response message
          carefully. If the game accepts the code, check the relevant reward
          or inventory area to see what was added.
        </p>
        <p>
          Use the in-experience code panel. The Roblox website's
          <a href="https://www.roblox.com/redeem" target="_blank" rel="noreferrer"> gift-card redemption page</a>
          is a separate service and is not the game's code panel.
        </p>

        <h2>Why might a code fail?</h2>
        <ul>
          <li><strong>Typing or copy error:</strong> Check every character, symbol, and extra space.</li>
          <li><strong>Already redeemed:</strong> The code may have been claimed previously on your account.</li>
          <li><strong>Expired or disabled:</strong> The developer may have ended the promotion.</li>
          <li><strong>Wrong experience:</strong> Confirm that you launched AKAYUKI: Steel Blossoms Red.</li>
          <li><strong>Unverified listing:</strong> A third-party page may list a string that has not been confirmed.</li>
          <li><strong>Temporary issue:</strong> Rejoin the experience and try again if the game appears to be having a temporary problem.</li>
        </ul>

        <h2>Can this website check whether a code works on my account?</h2>
        <p>
          No. Our <Link href="/code-checker/">Code Checker</Link> searches
          our own published records. It cannot connect to Roblox, inspect
          your account, or confirm whether you have already redeemed a code.
          The in-game response is the final confirmation.
        </p>

        <div className="article-cta">
          <strong>Find and check a code</strong>
          <p>Review reported status and source notes in the database, or check whether an exact code has an entry on this site.</p>
          <div className="article-cta-links">
            <Link className="button" href="/codes/">Browse Akayuki codes →</Link>
            <Link className="text-link" href="/code-checker/">Open Code Checker</Link>
          </div>
        </div>
        <p className="article-related">Related: <Link href="/guides/beginner-guide/">Akayuki Beginner Guide</Link> · <Link href="/guides/">All player guides</Link></p>
      </div>
    </article>
  );
}
