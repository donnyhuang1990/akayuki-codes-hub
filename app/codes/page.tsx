import type { Metadata } from 'next';
import Link from 'next/link';
import CodeList from '@/components/CodeList';
import { codes } from '@/lib/codes';

export const metadata: Metadata = {
  title: {
    absolute: 'Akayuki Codes – Active Codes & Free Rewards',
  },
  description:
    'Browse AKAYUKI: Steel Blossoms Red codes, compare reported rewards and status sources, and copy codes to try in-game. Includes source notes and review dates.',
  alternates: { canonical: '/codes/', languages: { en: '/codes/', ko: '/ko/akayuki-codes/', 'x-default': '/codes/' } },
};

const faqs = [
  {
    question: 'What are the latest Akayuki codes?',
    answer:
      'The code list above contains the entries currently recorded in this database. Check each entry’s reported status and source notes before trying it, because third-party listings can become outdated or disagree.',
  },
  {
    question: 'How do I redeem Akayuki codes?',
    answer:
      'Copy the exact code, open AKAYUKI: Steel Blossoms Red in Roblox, and enter it in the experience’s code redemption interface. Menu locations can change; see our redemption guide for the available instructions and limitations.',
  },
  {
    question: 'Why is my Akayuki code not working?',
    answer:
      'Check for typing errors, extra spaces, a previously redeemed code, an expired promotion, or a mismatch between the experience and the code. A third-party active listing is not a guarantee that the game will accept a code.',
  },
  {
    question: 'Are Akayuki codes case-sensitive?',
    answer:
      'Third-party guides report that codes may be case-sensitive. Copy the exact spelling, capitalization, numbers, and punctuation shown in the database rather than retyping it.',
  },
  {
    question: 'Can this website verify codes in-game?',
    answer:
      'No. This website records information from the sources linked on each entry. The Code Checker searches this site’s local database; it does not connect to Roblox or test redemption on your account. The in-game response is the final confirmation.',
  },
  {
    question: 'How often is this page updated?',
    answer:
      'We review the third-party source information available for listed entries and display a last source-check date on each code. We do not promise a fixed release or update schedule, and a review date does not mean the code was tested in-game.',
  },
];

export default function CodesPage() {
  const activeCount = codes.filter((item) => item.status === 'reported-active').length;
  const expiredCount = codes.filter((item) => item.status === 'reported-expired').length;
  const unverifiedCount = codes.filter((item) => item.status === 'unverified').length;
  const latestSourceCheck = codes
    .map((item) => item.lastChecked)
    .filter(Boolean)
    .sort()
    .at(-1);

  return (
    <div className="container page-wrap">
      <div className="eyebrow">AKAYUKI REWARDS DATABASE</div>
      <h1 className="page-title">Akayuki Codes – <span>Active Codes &amp; Free Rewards.</span></h1>
      <p className="page-intro">
        Looking for codes for <em>AKAYUKI: Steel Blossoms Red</em>? Browse the
        entries in our database, compare reported rewards and status information,
        and copy a code to try in-game. Each entry includes source notes and a
        last source-check date. Reports can change or disagree, so the game’s
        redemption response is the final confirmation.
      </p>

      <div className="codes-summary" aria-label="Code database summary">
        <div><strong>{codes.length}</strong><span>Listed entries</span></div>
        <div><strong>{activeCount}</strong><span>Reported active</span></div>
        <div><strong>{expiredCount}</strong><span>Reported expired</span></div>
        <div><strong>{unverifiedCount}</strong><span>Unverified</span></div>
      </div>

      <div className="notice">
        <strong>Important: reported status is not a live test</strong>
        <p>
          “Reported active” and “reported expired” summarize third-party listings.
          They are not official developer confirmation and do not mean this site
          tested the code in-game. Review the source notes for disagreements and
          use the game’s response as the final check.
        </p>
      </div>

      <section className="codes-howto" aria-labelledby="codes-howto-title">
        <div>
          <h2 id="codes-howto-title">Find and try an Akayuki code</h2>
          <p>
            Search by code text, reward, or source note. Filter by reported
            status, copy the exact code string, and enter it in the game’s
            redemption interface.
          </p>
        </div>
        <Link className="button button-ghost" href="/guides/how-to-redeem/">
          How to redeem codes <span>→</span>
        </Link>
      </section>

      <section aria-labelledby="all-codes-title">
        <div className="codes-section-heading">
          <div>
            <div className="eyebrow">SEARCH THE DATABASE</div>
            <h2 id="all-codes-title">All Akayuki Codes</h2>
          </div>
          {latestSourceCheck && (
            <p>Latest source-check date in this database: <strong>{latestSourceCheck}</strong></p>
          )}
        </div>
        <CodeList items={codes} />
      </section>

      <section className="content-block codes-reference">
        <h2>How we label Akayuki code statuses</h2>
        <p>
          <strong>Reported active</strong> means one or more linked third-party
          sources list the code as active. If sources disagree, the entry’s
          source note describes the disagreement where known. This label is not
          a promise that the code will work.
        </p>
        <p>
          <strong>Reported expired</strong> means one or more linked sources list
          the code as expired or inactive. It does not mean this site observed a
          failed redemption.
        </p>
        <p>
          <strong>Unverified</strong> means the available source information is
          not sufficient to assign a reliable reported status.
        </p>

        <h2>Where does the code information come from?</h2>
        <p>
          Each code entry links to the third-party pages used for its source
          comparison. Official game or developer announcements are preferable
          evidence when available. Third-party trackers are secondary sources
          and may differ in status, spelling, or reward details. We identify
          those differences rather than treating one listing as an in-game test.
        </p>
        <p>
          The date shown beside a code is the date its source information was
          last checked. It is not the date the developer released the code, and
          it does not indicate a successful redemption test.
        </p>

        <div className="codes-next-step">
          <strong>Looking up a specific code?</strong>
          <p>
            The Code Checker searches this website’s local database. It cannot
            query Roblox, inspect your account, or verify redemption live.
          </p>
          <Link className="text-link" href="/code-checker/">
            Open the Akayuki Code Checker →
          </Link>
        </div>
      </section>

      <section className="content-block codes-faq" aria-labelledby="codes-faq-title">
        <h2 id="codes-faq-title">Akayuki Codes – Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <details className="codes-faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="codes-bottom-links" aria-label="Related Akayuki resources">
        <div>
          <strong>Need help redeeming a code?</strong>
          <p>Follow the step-by-step instructions and review common redemption issues.</p>
          <Link className="text-link" href="/guides/how-to-redeem/">Read the Akayuki redemption guide →</Link>
        </div>
        <div>
          <strong>New to AKAYUKI?</strong>
          <p>Explore the beginner guide and other player resources.</p>
          <Link className="text-link" href="/guides/beginner-guide/">Read the beginner guide →</Link>
        </div>
      </section>
    </div>
  );
}
