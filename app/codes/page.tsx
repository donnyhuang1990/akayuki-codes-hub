import type { Metadata } from 'next';
import Link from 'next/link';
import CodeList from '@/components/CodeList';
import { codes } from '@/lib/codes';

export const metadata: Metadata = {
  title: 'Akayuki Codes – Search Codes, Rewards & Status',
  description: 'Search the AKAYUKI: Steel Blossoms Red code database. Browse reported active and expired codes, compare rewards, check source notes, and copy codes to try in-game.',
  alternates: { canonical: '/codes/' }
};

export default function CodesPage() {
  const activeCount = codes.filter((item) => item.status === 'reported-active').length;
  const expiredCount = codes.filter((item) => item.status === 'reported-expired').length;
  const unverifiedCount = codes.filter((item) => item.status === 'unverified').length;

  return (
    <div className="container page-wrap">
      <div className="eyebrow">THE DATABASE</div>
      <h1 className="page-title">Akayuki <span>Codes.</span></h1>
      <p className="page-intro">Search the code database for <em>AKAYUKI: Steel Blossoms Red</em>. Compare reported rewards and status notes, review source links, and copy a code to try in the game.</p>

      <div className="codes-summary" aria-label="Code database summary">
        <div><strong>{codes.length}</strong><span>Listed entries</span></div>
        <div><strong>{activeCount}</strong><span>Reported active</span></div>
        <div><strong>{expiredCount}</strong><span>Reported expired</span></div>
        <div><strong>{unverifiedCount}</strong><span>Unverified</span></div>
      </div>

      <div className="notice">
        <strong>Before you use a code</strong>
        <p>“Reported active” and “reported expired” summarize third-party listings; they are not official developer confirmation or an in-game test by this site. Sources can disagree. Review each entry's source notes and use the game's redemption response as the final confirmation. We do not infer missing rewards or requirements.</p>
      </div>

      <section className="codes-howto" aria-labelledby="codes-howto-title">
        <div>
          <h2 id="codes-howto-title">Find and try a code</h2>
          <p>Search by code text or a reward keyword, narrow the list by reported status, then copy the exact code string. Paste it into the game's redemption interface to see whether it is accepted.</p>
        </div>
        <Link className="button button-ghost" href="/guides/how-to-redeem/">How to redeem codes <span>→</span></Link>
      </section>

      <CodeList items={codes} />

      <section className="content-block codes-reference">
        <h2>How to read code statuses</h2>
        <p><strong>Reported active</strong> means one or more third-party sources list the code as active. Conflicting reports are noted where found; this label is not a guarantee.</p>
        <p><strong>Reported expired</strong> means one or more sources list the code as expired or inactive. It does not mean this site observed a failed redemption.</p>
        <p><strong>Unverified</strong> means the available evidence is not sufficient to assign a reliable status.</p>
        <h2>Where do new codes come from?</h2>
        <p>Official game and developer announcements are the preferred evidence. Third-party trackers and player reports are secondary sources and are identified as such. We record source links and the date each entry was checked. If you spot an error, use the <Link href="/contact/">contact page</Link> to send a correction.</p>
        <div className="codes-next-step">
          <strong>Looking for a specific code?</strong>
          <p>Try the local database lookup tool. It checks whether a code has an entry here; it does not query Roblox or verify redemption live.</p>
          <Link className="text-link" href="/code-checker/">Open the Akayuki Code Checker →</Link>
        </div>
      </section>
    </div>
  );
}
