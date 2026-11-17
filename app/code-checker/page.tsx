import type { Metadata } from 'next';
import Link from 'next/link';
import Checker from '@/components/Checker';

export const metadata: Metadata = {
  title: 'Akayuki Code Checker – Look Up Code Records',
  description: 'Look up AKAYUKI: Steel Blossoms Red codes in our local database. See recorded rewards, reported status, source notes, and redemption guidance.',
  alternates: { canonical: '/code-checker/' }
};

export default function CheckerPage() {
  return (
    <div className="container page-wrap narrow-page">
      <div className="eyebrow">LOCAL DATABASE LOOKUP</div>
      <h1 className="page-title">Akayuki Code <span>Checker.</span></h1>
      <p className="page-intro">Have a code and want to look it up? Enter the exact code below to see whether it has a record in our AKAYUKI: Steel Blossoms Red database.</p>

      <div className="checker-explainer">
        <strong>What happens when you check a code?</strong>
        <p>We compare your entry with the codes stored on this website and show any recorded reward, reported status, source notes, and last database review date.</p>
      </div>

      <Checker />

      <section className="content-block checker-details">
        <h2>What the checker can tell you</h2>
        <ul>
          <li>Whether the exact code appears in our current database.</li>
          <li>What reward details have been reported by the sources listed for that entry.</li>
          <li>Whether the entry is marked reported active, reported expired, or unverified.</li>
        </ul>
        <h2>Important limitations</h2>
        <p>This is a local database lookup, not a live Roblox connection. It cannot check game servers, inspect your account, determine whether you have already redeemed a code, or guarantee that a code will work. Third-party status reports can be outdated or disagree. The in-game redemption response is the final confirmation.</p>
        <div className="checker-next-steps">
          <div>
            <strong>Didn't find the code?</strong>
            <p>It may be new, mistyped, or not yet included in our records. Browse the full list or send us a correction.</p>
          </div>
          <div className="checker-next-links">
            <Link className="button button-ghost" href="/codes/">Browse all codes <span>→</span></Link>
            <Link className="text-link" href="/guides/how-to-redeem/">How to redeem codes</Link>
            <Link className="text-link" href="/contact/">Report a code update</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
